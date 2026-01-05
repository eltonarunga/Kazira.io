
/**
 * Security Service
 * Handles input sanitization and defensive coding patterns.
 */

/**
 * Sanitizes user input to prevent basic XSS and Prompt Injection.
 * Removes characters often used in injection attacks and limits length.
 */
export const sanitizeInput = (input: string, maxLength: number = 500): string => {
  if (!input) return "";
  
  // Basic length capping
  let sanitized = input.slice(0, maxLength);

  // Remove potential prompt injection delimiters and script tags
  sanitized = sanitized
    .replace(/[<>]/g, "") // Prevent HTML injection
    .replace(/(\n|\r)/g, " ") // Flatten to prevent multi-line prompt breaks
    .replace(/System Instruction:|Instruction:|Prompt:|Ignore previous/gi, "[REDACTED]");

  return sanitized.trim();
};

/**
 * Generates a non-predictable cryptographically-ish strong ID for the mock DB.
 * In production, this would be handled by the backend (UUID v4).
 */
export const generateSecureId = (): string => {
  return 'kz_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

/**
 * Validates email format using a strict regex.
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
