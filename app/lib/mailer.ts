import nodemailer from "nodemailer";

/**
 * Custom retry utility with exponential backoff.
 * 
 * @param fn The async function to retry.
 * @param retries Number of retries remaining.
 * @param delay Current delay in milliseconds.
 * @param factor Exponential backoff factor.
 * @returns The result of the async function.
 */
async function withRetry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000,
  factor: number = 2
): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    if (retries <= 0) {
      console.error("Max retries reached. Operation failed:", error.message);
      throw error;
    }

    // Don't retry on certain SMTP errors (e.g., authentication failure or invalid recipient)
    // 4xx errors are transient, 5xx are permanent
    if (error.responseCode && error.responseCode >= 500 && error.responseCode < 600) {
       console.error("Permanent SMTP error detected. Bailing:", error.message);
       throw error;
    }

    console.warn(
      `Attempt failed: ${error.message}. Retrying in ${delay}ms... (${retries} retries left)`
    );

    await new Promise((resolve) => setTimeout(resolve, delay));
    return withRetry(fn, retries - 1, delay * factor, factor);
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Sends an email using Nodemailer with a custom retry mechanism.
 * 
 * @param options Nodemailer SendMailOptions.
 * @returns The SMTP transport info.
 */
export async function sendEmail(options: nodemailer.SendMailOptions) {
  return await withRetry(async () => {
    const info = await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        ...options,
    });
    console.log("Email sent successfully:", info.messageId);
    return info;
  });
}
