'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Brain, Database, Zap } from 'lucide-react'

export default function ProjectHighlight() {
  return (
    <motion.section 
      className="py-6 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.6, ease: "easeOut" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-center text-dark-800 mb-4">
          Featured Project
        </h2>
        
        <motion.div 
          className="bg-light-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-4 border border-primary-200"
          whileHover={{ scale: 1.01, y: -1 }}
        >
          <div className="mb-4">
            <h3 className="text-lg font-bold text-dark-800 mb-1">
              RAG-Based Capability Matrix Analysis System
            </h3>
            <p className="text-primary-600 text-sm">
              Intelligent document comparison and semantic search pipeline
            </p>
          </div>
          
          <p className="text-primary-700 mb-4 leading-relaxed text-sm">
            Built with Python, LangChain, FAISS, Chroma, FastAPI, and Docker. Designed a retrieval pipeline for intelligent document comparison and optimized semantic search for speed and accuracy.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-1 text-xs text-accent-600 bg-accent-50 px-2 py-1 rounded">
              <Brain className="w-3 h-3" />
              <span>LangChain & RAG</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-accent-600 bg-accent-50 px-2 py-1 rounded">
              <Database className="w-3 h-3" />
              <span>FAISS & Chroma</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-accent-600 bg-accent-50 px-2 py-1 rounded">
              <Zap className="w-3 h-3" />
              <span>FastAPI & Docker</span>
            </div>
          </div>
          
          <motion.a
            href="https://github.com/harsh746-exe/RAG-NewCapMatrix-Pipeline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm border border-accent-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-3 h-3" />
            Explore Project
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
