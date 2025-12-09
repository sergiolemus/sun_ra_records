import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { waitlist } from "@/db/schema/waitlist";
import { eq } from "drizzle-orm";
import { sanitizeText } from "@/app/api/_utils/sanitizeText";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, artistName, streamingLink, socialMediaLink, reason } = body;

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

    if (
      !artistName ||
      typeof artistName !== "string" ||
      artistName.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Artist name is required" },
        { status: 400 }
      );
    }

    if (
      !socialMediaLink ||
      typeof socialMediaLink !== "string" ||
      socialMediaLink.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Social media link is required" },
        { status: 400 }
      );
    }

    const sanitizedArtistName = sanitizeText({
      text: artistName,
      maxLength: 100,
    });

    const sanitizedStreamingLink = sanitizeText({
      text: streamingLink,
      maxLength: 500,
    });

    const sanitizedSocialMediaLink = sanitizeText({
      text: socialMediaLink,
      maxLength: 500,
    });

    const sanitizedReason = sanitizeText({ text: reason, maxLength: 500 });

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
          artistName: sanitizedArtistName || existingEntry[0].artistName,
          streamingLink:
            sanitizedStreamingLink || existingEntry[0].streamingLink,
          socialMediaLink:
            sanitizedSocialMediaLink || existingEntry[0].socialMediaLink,
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
      artistName: sanitizedArtistName,
      streamingLink: sanitizedStreamingLink,
      socialMediaLink: sanitizedSocialMediaLink,
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
