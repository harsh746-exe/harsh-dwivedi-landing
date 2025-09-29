'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Download, UserPlus } from 'lucide-react'
import { useState } from 'react'

export default function ContactCard() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handlePhoneClick = () => {
    // Create vCard for contact saving
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Harsh Dwivedi
N:Dwivedi;Harsh;;;
TITLE:M.S. Computer Engineering | Software & AI Engineer
ORG:Syracuse University
TEL:+1-690-216-2032
EMAIL:edwivediharsh@gmail.com
URL:https://harsh-flame.vercel.app
URL:https://www.linkedin.com/in/harsh-dwivedi-854b39202
URL:https://github.com/harsh746-exe
NOTE:Graduate student at Syracuse University, passionate about backend engineering, AI/ML, and scalable systems.
END:VCARD`

    // Create and download vCard file
    const blob = new Blob([vCard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Harsh_Dwivedi.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const handleEmailClick = () => {
    const mailtoUrl = `mailto:edwivediharsh@gmail.com`
    window.open(mailtoUrl, '_blank')
  }

  const handleResumeEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setMessage('')

    try {
      // In a real implementation, you'd send this to your backend
      // For now, we'll simulate the API call
      const response = await fetch('/api/send-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.message.includes('Resend API key not configured')) {
          setMessage('📧 Request received! Please use the "Send Email" button above to contact me directly.')
        } else {
          setMessage('✅ Resume sent successfully! Check your email.')
        }
        setEmail('')
      } else {
        setMessage('❌ Failed to send resume. Please try again.')
      }
    } catch (error) {
      // Fallback: Open email client with pre-filled message
      const subject = 'Resume Request - Harsh Dwivedi'
      const body = `Hi Harsh,

Please send me your resume.

My email: ${email}

Thank you!`
      
      const mailtoUrl = `mailto:eharshdwivedi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(mailtoUrl, '_blank')
      setMessage('📧 Email client opened. Please send your request.')
    }

    setIsSubmitting(false)
  }

  return (
    <motion.section 
      className="py-6 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          className="text-xl font-bold text-center text-dark-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Phone Contact */}
          <motion.button
            onClick={handlePhoneClick}
            className="bg-light-50 border border-primary-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <UserPlus className="w-6 h-6 mx-auto mb-2 text-accent-600 group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <h3 className="text-sm font-semibold text-dark-800 mb-1">
                Save Contact
              </h3>
              <p className="text-xs text-primary-600">
                Add to phone contacts
              </p>
            </div>
          </motion.button>

          {/* Email Contact */}
          <motion.button
            onClick={handleEmailClick}
            className="bg-light-50 border border-primary-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="w-6 h-6 mx-auto mb-2 text-accent-600 group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <h3 className="text-sm font-semibold text-dark-800 mb-1">
                Send Email
              </h3>
              <p className="text-xs text-primary-600">
                Open email client
              </p>
            </div>
          </motion.button>
        </div>

        {/* Resume Email Form */}
        <motion.div 
          className="bg-light-50 rounded-lg shadow-lg p-4 border border-primary-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
        >
          <div className="text-center mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Download className="w-6 h-6 mx-auto mb-2 text-accent-600" />
            </motion.div>
            <h3 className="text-sm font-semibold text-dark-800 mb-1">
              Get Resume via Email
            </h3>
            <p className="text-xs text-primary-600">
              Enter your email to receive my resume
            </p>
          </div>

          <form onSubmit={handleResumeEmail} className="space-y-3">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-sm"
                required
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full bg-accent-600 hover:bg-accent-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Resume'}
            </motion.button>

            {message && (
              <motion.p 
                className="text-xs text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {message}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}
