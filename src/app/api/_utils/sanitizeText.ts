export type SanitizeText = (args: {
  text: string | undefined;
  maxLength: number;
}) => string | null;

export const sanitizeText: SanitizeText = ({ text, maxLength }) => {
  if (!text || typeof text !== "string") return null;

  const stripped = text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .trim();

  return stripped.slice(0, maxLength) || null;
};
