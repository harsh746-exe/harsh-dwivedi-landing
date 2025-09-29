'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

export default function CTA() {
  return (
    <motion.section 
      className="py-6 px-4 bg-gradient-to-br from-accent-50 to-primary-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div 
          className="bg-white rounded-lg p-6 shadow-lg border border-accent-200"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-bold text-dark-800 mb-3">
            Let&apos;s Connect!
          </h2>
          <p className="text-sm text-primary-600 mb-4 max-w-xl mx-auto">
            I&apos;m always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with fellow engineers and researchers.
          </p>
          
          <motion.a
            href="https://www.linkedin.com/in/harsh-dwivedi-854b39202"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              // Try to open LinkedIn app first
              const appUrl = 'linkedin://profile/harsh-dwivedi-854b39202';
              const webUrl = 'https://www.linkedin.com/in/harsh-dwivedi-854b39202';
              
              // Create a hidden iframe to try the app URL
              const iframe = document.createElement('iframe');
              iframe.style.display = 'none';
              iframe.src = appUrl;
              document.body.appendChild(iframe);
              
              // Fallback to web URL after a short delay
              setTimeout(() => {
                document.body.removeChild(iframe);
                window.open(webUrl, '_blank');
              }, 1000);
            }}
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm border border-accent-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
