import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Check if Resend API key is configured
    if (!resend) {
      console.log(`Resume request from: ${email} (Resend API key not configured)`)
      return NextResponse.json({ 
        success: true, 
        message: 'Resume request received. Please check your email shortly.' 
      })
    }

    // Send email with resume
    const { data, error } = await resend.emails.send({
      from: 'Harsh Dwivedi <onboarding@resend.dev>', // You'll need to verify this domain
      to: [email],
      subject: 'Harsh Dwivedi - Resume & Portfolio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #334155;">Hi there!</h2>
          <p>Thank you for your interest in my work. Please find my resume attached below.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Harsh Dwivedi</h3>
            <p style="color: #64748b; margin: 5px 0;">M.S. Computer Engineering | Software & AI Engineer</p>
            <p style="color: #64748b; margin: 5px 0;">Syracuse University</p>
            <p style="color: #64748b; margin: 5px 0;">Email: eharshdwivedi@gmail.com</p>
          </div>
          
          <p>I'm passionate about backend engineering, AI/ML, and building scalable systems. I'd love to connect and discuss potential opportunities!</p>
          
          <div style="margin: 30px 0;">
            <a href="https://www.linkedin.com/in/harsh-dwivedi-854b39202" style="color: #0ea5e9; text-decoration: none; margin-right: 20px;">LinkedIn</a>
            <a href="https://github.com/harsh746-exe" style="color: #0ea5e9; text-decoration: none; margin-right: 20px;">GitHub</a>
            <a href="https://harsh-flame.vercel.app" style="color: #0ea5e9; text-decoration: none;">Portfolio</a>
          </div>
          
          <p style="color: #64748b; font-size: 14px;">Best regards,<br>Harsh Dwivedi</p>
        </div>
      `,
      attachments: [
        {
          filename: 'Harsh_Dwivedi_Resume.pdf',
          content: 'Resume content here', // You'll need to add your actual resume PDF content
        }
      ]
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    console.log(`Resume sent successfully to: ${email}`)
    return NextResponse.json({ 
      success: true, 
      message: 'Resume sent successfully! Check your email.' 
    })

  } catch (error) {
    console.error('Error sending resume:', error)
    return NextResponse.json(
      { error: 'Failed to send resume' }, 
      { status: 500 }
    )
  }
}
