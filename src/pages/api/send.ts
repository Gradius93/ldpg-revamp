import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

// Initialize Resend with your environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, message } = req.body;

    // Validate required fields
    if (!email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const subject = `New Message from ${email}`;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "LDPG <LDPG.CO.UK@domainsbyproxy.com>", // Use your *verified* domain
      to: ["sean.myles.gray@gmail.com"], // The recipient (usually your email)
      subject: subject,
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(500).json({ error });
    }

    return res.status(200).json({ data });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
