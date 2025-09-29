'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gradient-to-br from-dark-800 to-dark-900 text-white py-6 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.p 
          className="text-sm text-primary-200 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          Thanks for visiting! Excited to bring my mix of backend engineering, AI, and real-world systems experience to impactful projects.
        </motion.p>
        
        <motion.div 
          className="border-t border-primary-600 pt-3 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <p className="text-xs text-primary-400">
            © {new Date().getFullYear()} Harsh Dwivedi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
