import { NextRequest, NextResponse } from "next/server";

/**
 * Contact API Route
 * 
 * Handles form submissions from the contact form.
 * 
 * In production, you should:
 * - Add email service integration (SendGrid, Resend, etc.)
 * - Add rate limiting
 * - Add input validation/sanitization
 * - Store submissions in a database
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: In production, integrate with an email service
    // Example with a service like Resend or SendGrid:
    /*
    const emailService = new EmailService();
    await emailService.send({
      to: 'your-email@example.com',
      from: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    */

    // For now, just log the submission (remove in production)
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

