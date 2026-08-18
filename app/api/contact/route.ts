import { NextRequest, NextResponse } from "next/server";

const TENANT_ID = process.env.MS_TENANT_ID!;
const CLIENT_ID = process.env.MS_CLIENT_ID!;
const CLIENT_SECRET = process.env.MS_CLIENT_SECRET!;
const SENDER_EMAIL = process.env.MS_SENDER_EMAIL || "hello@dreamwanoura.com";
const RECIPIENT_EMAIL = process.env.MS_RECIPIENT_EMAIL || "hello@dreamwanoura.com";

async function getGraphAccessToken() {
      const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
      const body = new URLSearchParams({
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
              scope: "https://graph.microsoft.com/.default",
              grant_type: "client_credentials",
      });

  const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
  });

  if (!res.ok) {
          const errText = await res.text();
          throw new Error(`Failed to get Graph access token: ${res.status} ${errText}`);
  }

  const data = await res.json();
      return data.access_token as string;
}

async function sendMailViaGraph({
      name,
      email,
      company,
      message,
}: {
      name: string;
      email: string;
      company?: string;
      message: string;
}) {
      const accessToken = await getGraphAccessToken();

  const mailBody = {
          message: {
                    subject: `New contact form submission from ${name}`,
                    body: {
                                contentType: "Text",
                                content: [
                                              `Name: ${name}`,
                                              `Email: ${email}`,
                                              company ? `Company: ${company}` : null,
                                              "",
                                              "Message:",
                                              message,
                                            ]
                                  .filter(Boolean)
                                  .join("\n"),
                    },
                    toRecipients: [{ emailAddress: { address: RECIPIENT_EMAIL } }],
                    replyTo: [{ emailAddress: { address: email, name } }],
          },
          saveToSentItems: true,
  };

  const res = await fetch(
          `https://graph.microsoft.com/v1.0/users/${SENDER_EMAIL}/sendMail`,
      {
                method: "POST",
                headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-Type": "application/json",
                },
                body: JSON.stringify(mailBody),
      }
        );

  if (!res.ok) {
          const errText = await res.text();
          throw new Error(`Graph sendMail failed: ${res.status} ${errText}`);
  }
}

export async function POST(req: NextRequest) {
      try {
              const { name, email, message, company } = await req.json();

        if (!name || !email || !message) {
                  return NextResponse.json(
                      { error: "Missing required fields" },
                      { status: 400 }
                            );
        }

        await sendMailViaGraph({ name, email, company, message });

        return NextResponse.json({ ok: true });
      } catch (error) {
              console.error("Contact error", error);
              return NextResponse.json(
                  { error: "Internal server error" },
                  { status: 500 }
                      );
      }
}
