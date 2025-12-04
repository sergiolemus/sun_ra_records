import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { waitlist } from "@/db/schema/waitlist";
import { eq } from "drizzle-orm";
import { sanitizeText } from "@/app/api/_utils/sanitizeText";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, reason } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (email.length > 254) {
      return NextResponse.json({ error: "Email is too long" }, { status: 400 });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const sanitizedReason = sanitizeText({ text: reason, maxLength: 1000 });

    const searchParams = request.nextUrl.searchParams;
    const utmSource = searchParams.get("utm_source");

    const referrer = request.headers.get("referer");
    let source = utmSource || "direct";

    if (!utmSource && referrer) {
      try {
        const referrerUrl = new URL(referrer);
        const referrerHostname = referrerUrl.hostname.replace("www.", "");
        const currentHostname = request.nextUrl.hostname.replace("www.", "");

        if (referrerHostname === currentHostname) {
          source = "direct";
        } else {
          source = referrerHostname;
        }
      } catch {
        source = "direct";
      }
    }

    const existingEntry = await db
      .select()
      .from(waitlist)
      .where(eq(waitlist.email, email.toLowerCase()))
      .limit(1);

    if (existingEntry.length > 0) {
      await db
        .update(waitlist)
        .set({
          reason: sanitizedReason || existingEntry[0].reason,
          source: source || existingEntry[0].source,
          updatedAt: Math.floor(Date.now() / 1000),
        })
        .where(eq(waitlist.email, email.toLowerCase()));

      return NextResponse.json(
        {
          message:
            "You're already on the waitlist! We've updated your information.",
          isUpdate: true,
        },
        { status: 200 }
      );
    }

    await db.insert(waitlist).values({
      email: email.toLowerCase(),
      reason: sanitizedReason,
      source,
      status: "pending",
    });

    return NextResponse.json(
      {
        message: "Successfully joined the waitlist!",
        isUpdate: false,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
