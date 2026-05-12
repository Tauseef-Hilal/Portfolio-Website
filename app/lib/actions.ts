"use server";
import { sendEmail } from "./mailer";

export type FormResponse = {
  success: boolean;
  message: string;
};

export async function sendMail(formData: FormData): Promise<FormResponse> {
  const message = formData.get("message");
  const email = formData.get("email");

  try {
    await sendEmail({
      to: process.env.RECEIVER_EMAIL,
      subject: "Portfolio Mail",
      text: `From: ${email}\n\n${message}`,
    });
    
    return { success: true, message: "Email Sent!" };
  } catch (error) {
    console.error("Failed to send email after retries:", error);
    return { success: false, message: "Couldn't Send Email!" };
  }
}
