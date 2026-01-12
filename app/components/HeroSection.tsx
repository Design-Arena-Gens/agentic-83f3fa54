'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
          Genera Contenido Viral
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          De <span className="text-cyber-blue text-glow-blue font-bold">0 a 30k seguidores</span> en 1 mes
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Prompts optimizados + Estrategias probadas = Crecimiento explosivo
        </p>
      </motion.div>

      {/* Animated Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center gap-8 flex-wrap"
      >
        {[
          { number: '30k', label: 'Seguidores/mes' },
          { number: '85%', label: 'Tasa de guardado' },
          { number: '9:16', label: 'Formato perfecto' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="glassmorphism rounded-lg px-6 py-4 min-w-[140px]"
          >
            <div className="text-3xl font-bold text-cyber-purple text-glow-purple">
              {stat.number}
            </div>
            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-cyber-pink/10 rounded-full blur-3xl animate-pulse-slow" />
    </div>
  )
}
