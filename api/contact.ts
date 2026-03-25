import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "name, email and message are required" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || `"${name}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECIPIENT || process.env.SMTP_USER,
    subject:
      subject && subject.length ? subject : `Contact form message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent", info });
  } catch (err) {
    console.error("Mail send error:", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
