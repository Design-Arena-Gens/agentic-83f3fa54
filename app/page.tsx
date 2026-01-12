'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PromptGenerator from './components/PromptGenerator'
import StrategyCarousel from './components/StrategyCarousel'
import NicheVariations from './components/NicheVariations'
import HeroSection from './components/HeroSection'

export default function Home() {
  const [activeTab, setActiveTab] = useState('prompts')

  return (
    <main className="min-h-screen bg-cyber-darker overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-cyber-blue/5 via-cyber-purple/5 to-cyber-pink/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />

        {/* Navigation Tabs */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center gap-4 mb-12">
            {['prompts', 'estrategias', 'variaciones'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-cyber text-white shadow-neon-blue'
                    : 'glassmorphism text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === 'prompts' && '🎨 Prompts Virales'}
                {tab === 'estrategias' && '🚀 Estrategias'}
                {tab === 'variaciones' && '🔄 Variaciones'}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'prompts' && <PromptGenerator />}
            {activeTab === 'estrategias' && <StrategyCarousel />}
            {activeTab === 'variaciones' && <NicheVariations />}
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 text-center text-gray-400">
          <p className="text-sm">
            🤖 Generador de Contenido Viral IA - De 0 a 30k seguidores en 1 mes
          </p>
          <p className="text-xs mt-2 text-cyber-blue">
            Estilo Cyberpunk Clean • Tech Minimalist • Glassmorphism
          </p>
        </footer>
      </div>
    </main>
  )
}
