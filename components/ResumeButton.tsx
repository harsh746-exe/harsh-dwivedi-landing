'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function ResumeButton() {
  return (
    <motion.div 
      className="flex justify-center mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
    >
      <motion.a
        href="/resume.pdf"
        download="Harsh_Dwivedi_Resume.pdf"
        className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base border border-accent-500"
        whileHover={{ scale: 1.01, y: -1 }}
        whileTap={{ scale: 0.98 }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
      >
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Download className="w-4 h-4" />
        </motion.div>
        Download Resume
      </motion.a>
    </motion.div>
  )
}
