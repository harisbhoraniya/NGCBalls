// lib/validation.ts

/**
 * Validates email with proper format, valid domain, and TLD of at least 2 characters.
 * Rejects obvious fake / dummy placeholders (test@test.com, abc@abc.com, etc.).
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim().toLowerCase();

  // Basic regex check conforming to RFC standards
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) return false;

  const parts = trimmed.split("@");
  if (parts.length !== 2) return false;
  const [localPart, domain] = parts;

  // Local part must be at least 2 characters
  if (localPart.length < 2) return false;

  // Domain must contain a dot and valid TLD of at least 2 alpha characters
  const domainParts = domain.split(".");
  if (domainParts.length < 2) return false;
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2 || !/^[a-z]+$/.test(tld)) return false;

  // Reject common dummy/placeholder emails
  const dummyEmails = [
    "test@test.com",
    "test@gmail.com",
    "admin@admin.com",
    "fake@fake.com",
    "asdf@asdf.com",
    "abc@abc.com",
    "user@user.com",
    "email@email.com",
    "none@none.com",
  ];
  if (dummyEmails.includes(trimmed)) return false;

  return true;
}

/**
 * Validates phone number:
 * - Allows +, digits, spaces, hyphens, parentheses
 * - Strictly requires at least 10 digits and at most 15 digits (ITU-T E.164 standard)
 * - If 10 digits (typical Indian standard mobile): must start with 6, 7, 8, or 9
 * - If 12 digits starting with 91 (+91 India): 10-digit number must start with 6, 7, 8, or 9
 * - Rejects dummy sequential and repetitive strings (1234567890, 0000000000, 9999999999)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== "string") return false;
  const trimmed = phone.trim();

  // Valid phone characters only
  if (!/^[\d\s+\-()]{10,25}$/.test(trimmed)) return false;

  // Extract digits only
  const digits = trimmed.replace(/\D/g, "");

  // Must be between 10 and 15 digits
  if (digits.length < 10 || digits.length > 15) return false;

  // Reject repetitive single digit strings (e.g. 0000000000, 1111111111, 9999999999)
  if (/^(\d)\1+$/.test(digits)) return false;

  // Reject common dummy sequential sequences
  const dummySequences = [
    "1234567890",
    "0123456789",
    "9876543210",
    "0987654321",
    "1234512345",
    "9876598765",
  ];
  if (dummySequences.some((seq) => digits.includes(seq))) return false;

  // If 10 digits without country code, it must start with 6, 7, 8, or 9
  if (digits.length === 10 && !trimmed.startsWith("+")) {
    if (!/^[6-9]\d{9}$/.test(digits)) return false;
  }

  // If 12 digits starting with 91 (India with country code 91)
  if (digits.length === 12 && digits.startsWith("91")) {
    const local = digits.slice(2);
    if (!/^[6-9]\d{9}$/.test(local)) return false;
  }

  // If 11 digits starting with 0 (India local trunk prefix 0)
  if (digits.length === 11 && digits.startsWith("0")) {
    const local = digits.slice(1);
    if (!/^[6-9]\d{9}$/.test(local)) return false;
  }

  return true;
}
