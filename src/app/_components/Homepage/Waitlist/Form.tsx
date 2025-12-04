"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
  Container,
  alpha,
  useMediaQuery,
} from "@mui/material";
import { MotionValue } from "framer-motion";
import { MotionCard } from "../../Motion";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ERROR_MESSAGES: Record<number, string> = {
  400: "Please check your email address and try again.",
  429: "Too many attempts. Please try again in an hour.",
  500: "Our server had a hiccup. Please try again in a moment.",
};

export type FormProps = {
  style: {
    backgroundColor?: MotionValue<string | undefined>;
    color?: MotionValue<string | undefined>;
    borderColor?: MotionValue<string | undefined>;
  };
};

export const Form = ({ style }: FormProps) => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const isMobile = useMediaQuery(({ breakpoints: b }) => b.down("sm"));

  const validateEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const params = new URLSearchParams(window.location.search);
      const utmSource = params.get("utm_source");

      const apiUrl = utmSource
        ? `/api/waitlist?utm_source=${encodeURIComponent(utmSource)}`
        : "/api/waitlist";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, reason }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          ERROR_MESSAGES[response.status] ||
          data.error ||
          "Something went wrong. Please try again.";

        throw new Error(errorMessage);
      }

      setSuccess(true);
      setEmail("");
      setReason("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to join waitlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <MotionCard
        variant="outlined"
        sx={{
          padding: 4,
          borderRadius: 8,
          bgcolor: alpha("#000", 0.2),
          backdropFilter: "blur(20px)",
          border: "1px solid",
        }}
        style={style}
      >
        {!success && (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              required
              fullWidth
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              placeholder="your@email.com"
              error={email.length > 0 && !validateEmail(email)}
              aria-describedby={error ? "email-error" : undefined}
              slotProps={{
                inputLabel: {
                  ...(isMobile && { shrink: true }),
                },
              }}
            />
            <TextField
              fullWidth
              multiline
              label="What excites you most about Numa?"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              disabled={loading}
              placeholder="Tell us what brought you here..."
              slotProps={{
                htmlInput: { maxLength: 250 },
                formHelperText: { sx: { m: 0, mt: 1 } },
                inputLabel: {
                  ...(isMobile && { shrink: true }),
                  sx: {
                    whiteSpace: { xs: "normal", sm: "nowrap" },
                    "&.MuiInputLabel-shrink": {
                      whiteSpace: "nowrap",
                    },
                  },
                },
              }}
              helperText={`${reason.length}/250 characters`}
              minRows={3}
              maxRows={8}
            />
            {error && (
              <Alert
                id="email-error"
                severity="error"
                onClose={() => setError(null)}
              >
                {error}
              </Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ py: 1 }}
            >
              {loading ? (
                <CircularProgress size={24} color="primary" />
              ) : (
                "Request Early Access"
              )}
            </Button>
            <Typography variant="caption" color="primary" textAlign="center">
              We&apos;ll reach out when early access opens.
            </Typography>
          </Box>
        )}
        {success && (
          <Box sx={{ textAlign: "center" }}>
            <Alert
              variant="filled"
              severity="success"
              sx={{
                mb: 2,
                borderRadius: 4,
                bgcolor: alpha("#00AF91", 0.8),
                backdropFilter: "blur(20px)",
              }}
            >
              You&apos;re on the list! We&apos;ll reach out when early access is
              ready.
            </Alert>
            <Typography variant="body2" color="primary">
              You&apos;ll hear from us soon.
            </Typography>
          </Box>
        )}
      </MotionCard>
    </Container>
  );
};
