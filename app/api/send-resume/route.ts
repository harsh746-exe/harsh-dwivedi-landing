import { NextRequest, NextResponse } from 'next/server'

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
    if (!process.env.RESEND_API_KEY) {
      console.log(`Resume request from: ${email} (Resend API key not configured)`)
      return NextResponse.json({ 
        success: true, 
        message: 'Resume request received. Please check your email shortly.' 
      })
    }

    // Try to send email with Resend
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      const { data, error } = await resend.emails.send({
        from: 'Harsh Dwivedi <onboarding@resend.dev>',
        to: [email],
        subject: 'Harsh Dwivedi - Resume & Portfolio',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #334155; margin-bottom: 20px;">Hi there!</h2>
            <p style="color: #64748b; margin-bottom: 20px;">Thank you for your interest in my work. Please find my resume attached below.</p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
              <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 10px;">Harsh Dwivedi</h3>
              <p style="color: #64748b; margin: 5px 0;">M.S. Computer Engineering | Software & AI Engineer</p>
              <p style="color: #64748b; margin: 5px 0;">Syracuse University</p>
              <p style="color: #64748b; margin: 5px 0;">Email: eharshdwivedi@gmail.com</p>
            </div>
            
            <p style="color: #334155; margin: 20px 0;">I'm passionate about backend engineering, AI/ML, and building scalable systems. I'd love to connect and discuss potential opportunities!</p>
            
            <div style="margin: 30px 0; text-align: center;">
              <a href="https://www.linkedin.com/in/harsh-dwivedi-854b39202" style="color: #0ea5e9; text-decoration: none; margin: 0 15px; font-weight: 500;">LinkedIn</a>
              <a href="https://github.com/harsh746-exe" style="color: #0ea5e9; text-decoration: none; margin: 0 15px; font-weight: 500;">GitHub</a>
              <a href="https://harsh-flame.vercel.app" style="color: #0ea5e9; text-decoration: none; margin: 0 15px; font-weight: 500;">Portfolio</a>
            </div>
            
            <p style="color: #64748b; font-size: 14px; margin-top: 30px;">Best regards,<br><strong>Harsh Dwivedi</strong></p>
          </div>
        `,
        attachments: [
          {
            filename: 'Harsh_Dwivedi_Resume.pdf',
            content: 'Resume content here', // You can add your actual resume PDF content as base64
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

    } catch (resendError) {
      console.error('Resend initialization error:', resendError)
      return NextResponse.json({ 
        success: true, 
        message: 'Resume request received. Please check your email shortly.' 
      })
    }

  } catch (error) {
    console.error('Error processing resume request:', error)
    return NextResponse.json(
      { error: 'Failed to process request' }, 
      { status: 500 }
    )
  }
}