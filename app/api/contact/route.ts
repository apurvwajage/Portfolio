import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data

    // In a real application, you would integrate with an email service here,
    // such as Resend, SendGrid, Nodemailer, etc.
    // For example, using Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev', // Your verified sender email
    //   to: 'your-email@example.com', // Your actual email address to receive messages
    //   subject: `New message from ${name} via portfolio`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    // });

    console.log("Received contact form submission:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Message:", message)

    // Simulate a successful email send
    return NextResponse.json({ message: "Message received successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ message: "Error processing your request." }, { status: 500 })
  }
}
