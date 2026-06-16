import { NextResponse } from "next/server";

const requiredFields = ["name", "companyName", "phone", "email", "service", "budget", "message"] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    for (const field of requiredFields) {
      if (typeof body[field] !== "string" || body[field].trim().length === 0) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(body.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const submission = {
      name: body.name.trim(),
      companyName: body.companyName.trim(),
      phone: body.phone.trim(),
      email: body.email.trim().toLowerCase(),
      service: body.service,
      budget: body.budget,
      message: body.message.trim(),
      receivedAt: new Date().toISOString()
    };

    // Replace this console log with an email, CRM, sheet, or webhook integration when ready.
    console.log("New Decipher Global enquiry:", submission);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
