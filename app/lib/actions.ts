"use server";
import sgMail from "@sendgrid/mail";

export type FormResponse = {
  success: boolean;
  message: string;
};

export async function sendMail(formData: FormData): Promise<FormResponse> {
  const message = formData.get("message");
  const email = formData.get("email");

  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  const msg = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: "Portfolio Mail",
    text: `From: ${email}\n\n${message}`,
  };

  try {
    //@ts-ignore
    await sgMail.send(msg);
    console.log("Email sent");
    return { success: true, message: "Email Sent!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Couldn't Send Email!" };
  }
}
