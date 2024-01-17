"use server";
//@ts-ignore
import nodemailer from "nodemailer";

export async function sendMail(formData: FormData) {
  const message = formData.get("message");
  const email = formData.get("email");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
    secure: true,
    timeout: 10000,
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: "Portfolio Mail",
    text: `From: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error sending email" };
  }
}
