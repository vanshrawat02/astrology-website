import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      dob,
      tob,
      pob,
      topic,
      preferredDate,
      timeSlot,
      message,
    } = body;

    // Basic Validation
    if (!fullName || !email || !phone || !topic) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: fullName, email, phone, and topic are mandatory.",
        },
        { status: 400 }
      );
    }

    const bookingId = `VAN-${Date.now().toString().slice(-6)}`;
    const fee = "₹1,500 INR";
    const notificationEmail = "secretsofastrology2dh@gmail.com";

    // Format Email Notification Payload
    const emailPayload = {
      to: notificationEmail,
      subject: `New Astrology Booking #${bookingId} - ${fullName}`,
      text: `
NEW CONSULTATION BOOKING RECEIVED
---------------------------------
Booking Reference: #${bookingId}
Fee: ${fee}

CLIENT DETAILS:
- Full Name: ${fullName}
- Email: ${email}
- Phone/WhatsApp: ${phone}

BIRTH PARAMETERS:
- Date of Birth: ${dob || "N/A"}
- Time of Birth: ${tob || "N/A"}
- Place of Birth: ${pob || "N/A"}

CONSULTATION DETAILS:
- Specialization Topic: ${topic}
- Preferred Date: ${preferredDate || "Earliest Available"}
- Preferred Time Slot: ${timeSlot || "Flexible"}

ADDITIONAL NOTES:
${message || "None provided"}
      `.trim(),
    };

    // Server-side Log
    console.log(`[BOOKING SYSTEM] #${bookingId} for ${fullName}:`, emailPayload);

    // Optional integration with Resend API if key exists
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Astrology Bookings <onboarding@resend.dev>",
            to: [notificationEmail],
            subject: emailPayload.subject,
            text: emailPayload.text,
          }),
        });
      } catch (emailErr) {
        console.warn("[BOOKING SYSTEM] Email API call failed, proceeding with WhatsApp fallback:", emailErr);
      }
    }

    // Format WhatsApp Redirect URL for instant client confirmation fallback
    const whatsappMessage = `*New Booking #${bookingId}*\n\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Email:* ${email}\n*DOB:* ${dob || "N/A"} | *TOB:* ${tob || "N/A"} | *POB:* ${pob || "N/A"}\n*Topic:* ${topic}\n*Preferred Slot:* ${preferredDate || "Any"} (${timeSlot || "Flexible"})\n*Fee:* ${fee}\n\n*Message:* ${message || "N/A"}`;
    const whatsappUrl = `https://wa.me/919311677001?text=${encodeURIComponent(whatsappMessage)}`;

    return NextResponse.json({
      success: true,
      bookingId,
      fee,
      clientName: fullName,
      topic,
      whatsappUrl,
      message: "Consultation booking submitted successfully.",
    });
  } catch (err: unknown) {
    console.error("[BOOKING SYSTEM] Error processing booking:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error processing consultation booking.",
      },
      { status: 500 }
    );
  }
}

