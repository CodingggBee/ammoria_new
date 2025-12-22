import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Server-side validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM system
    // 4. Send confirmation email to user
    
    // Example: Log the submission (replace with actual implementation)
    console.log("Contact form submission:", {
      name,
      email,
      projectType,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true,
        message: "Your message has been received. We'll get back to you soon!" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}

