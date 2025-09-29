'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      className="text-center py-8 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold text-dark-800 mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Harsh Dwivedi
        </motion.h1>
        
        <motion.h2 
          className="text-base sm:text-lg text-accent-600 font-medium mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          M.S. Computer Engineering | Software & AI Engineer
        </motion.h2>
        
        <motion.p 
          className="text-sm sm:text-base text-primary-600 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Graduate student at Syracuse University, passionate about backend engineering, AI/ML, and scalable systems.
        </motion.p>
      </div>
    </motion.section>
  )
}
