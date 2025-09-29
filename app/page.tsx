'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ResumeButton from '@/components/ResumeButton'
import ConnectSection from '@/components/ConnectSection'
import ProjectHighlight from '@/components/ProjectHighlight'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen bg-gradient-to-br from-light-50 via-light-100 to-primary-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ResumeButton />
      <ConnectSection />
      <ProjectHighlight />
      <Footer />
    </motion.main>
  )
}
