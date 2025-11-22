import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message, company } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // TODO: integrate email/CRM provider here
        // For now, we'll just log it to the server console
        console.log("Contact form submission:", { name, email, company, message });

        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Contact error", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
