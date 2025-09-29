'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, ExternalLink } from 'lucide-react'

const links = [
  {
    name: 'LinkedIn',
    href: 'linkedin://profile/harsh-dwivedi-854b39202',
    fallbackHref: 'https://www.linkedin.com/in/harsh-dwivedi-854b39202',
    icon: Linkedin,
    color: 'text-accent-600',
    bgColor: 'bg-accent-50',
    hoverColor: 'hover:bg-accent-100',
    borderColor: 'border-accent-200'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/harsh746-exe',
    icon: Github,
    color: 'text-dark-700',
    bgColor: 'bg-primary-50',
    hoverColor: 'hover:bg-primary-100',
    borderColor: 'border-primary-200'
  },
  {
    name: 'Portfolio',
    href: 'https://harsh-flame.vercel.app',
    icon: ExternalLink,
    color: 'text-accent-700',
    bgColor: 'bg-accent-50',
    hoverColor: 'hover:bg-accent-100',
    borderColor: 'border-accent-200'
  }
]

export default function QuickLinks() {
  return (
    <motion.section 
      className="py-6 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          className="text-xl font-bold text-center text-dark-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        >
          Connect & Explore
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.name === 'LinkedIn' ? link.fallbackHref : link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (link.name === 'LinkedIn') {
                  e.preventDefault();
                  // Try to open LinkedIn app first
                  const appUrl = link.href;
                  const webUrl = link.fallbackHref;
                  
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
                }
              }}
              className="bg-light-50 border border-primary-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <link.icon className="w-6 h-6 mx-auto mb-2 text-accent-600 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-sm font-semibold text-dark-800 mb-1">
                  {link.name}
                </h3>
                <p className="text-xs text-primary-600">
                  {link.name === 'LinkedIn' && 'Professional Network'}
                  {link.name === 'GitHub' && 'Code & Projects'}
                  {link.name === 'Portfolio' && 'Work Showcase'}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
