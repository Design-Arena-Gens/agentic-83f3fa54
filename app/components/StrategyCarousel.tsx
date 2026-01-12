'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const strategies = [
  {
    title: 'Estrategia 1: El Reel de "¿Te imaginas usar esto?"',
    icon: '🎬',
    steps: [
      {
        title: 'Visual',
        content: 'La imagen generada con zoom in lento (usa CapCut)',
        color: 'cyber-blue',
      },
      {
        title: 'Audio',
        content: 'Sonido trend de ciencia ficción o tecnológico',
        color: 'cyber-purple',
      },
      {
        title: 'Texto en pantalla (Gancho)',
        content: '"Así lucirán los ordenadores en el año 2030 🤯"',
        color: 'cyber-pink',
      },
      {
        title: 'Caption (Descripción)',
        content: '"Esta interfaz no existe... todavía. Pero las IAs ya están diseñándola. Link en mi bio para ver las herramientas que hacen esto posible."',
        color: 'cyber-blue',
      },
    ],
    results: 'Engagement: 85% • Guardados: 12k+ • Shares: 3k+',
  },
  {
    title: 'Estrategia 2: El Carrusel de "Herramientas vs Realidad"',
    icon: '📸',
    steps: [
      {
        title: 'Slide 1',
        content: 'Tu imagen futurista generada con el prompt ganador',
        color: 'cyber-purple',
      },
      {
        title: 'Slide 2',
        content: 'Captura de pantalla real de una herramienta de IA actual (Midjourney o ChatGPT)',
        color: 'cyber-blue',
      },
      {
        title: 'Slide 3',
        content: 'Texto: "De la ciencia ficción a la realidad. Estas 3 apps te acercan al futuro"',
        color: 'cyber-pink',
      },
      {
        title: 'Call to Action',
        content: 'Link en bio con las herramientas exactas',
        color: 'cyber-purple',
      },
    ],
    results: 'Reach: 150k+ • Seguidores nuevos: 2.5k+ • CTR Bio: 18%',
  },
]

export default function StrategyCarousel() {
  const [activeStrategy, setActiveStrategy] = useState(0)

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-cyber-purple text-glow-purple">
          Estrategias de Monetización y Crecimiento
        </h2>
        <p className="text-gray-400">
          No subas solo la imagen. Conviértela en contenido viral con estas estrategias
        </p>
      </motion.div>

      {/* Strategy Selector */}
      <div className="flex justify-center gap-4 mb-8">
        {strategies.map((strategy, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveStrategy(idx)}
            className={`px-6 py-4 rounded-lg font-semibold transition-all ${
              activeStrategy === idx
                ? 'bg-gradient-cyber shadow-neon-purple scale-105'
                : 'glassmorphism hover:scale-105'
            }`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-3xl mb-2">{strategy.icon}</div>
            <div className="text-sm">Estrategia {idx + 1}</div>
          </motion.button>
        ))}
      </div>

      {/* Strategy Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStrategy}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="glassmorphism rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">
            {strategies[activeStrategy].title}
          </h3>

          <div className="space-y-6 mb-8">
            {strategies[activeStrategy].steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/30 rounded-lg p-5 border-l-4 border-cyber-blue"
              >
                <div className="flex items-start gap-4">
                  <div className={`text-2xl font-bold text-${step.color}`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300">{step.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-cyber/10 border border-cyber-purple/30 rounded-lg p-6"
          >
            <h4 className="font-bold text-cyber-purple mb-3">📊 Resultados Esperados:</h4>
            <p className="text-lg text-white font-semibold">
              {strategies[activeStrategy].results}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Pro Tip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 glassmorphism rounded-xl p-6 border-2 border-cyber-pink/30"
      >
        <h4 className="font-bold text-cyber-pink text-glow-pink mb-3 flex items-center gap-2">
          <span className="text-2xl">💡</span> Truco Final para el Algoritmo
        </h4>
        <p className="text-gray-300">
          Publica en <strong className="text-white">horarios pico</strong>: 7-9am, 12-2pm, 7-10pm.
          Combina ambas estrategias alternando días para mantener el feed dinámico.
          El algoritmo premia la consistencia: <strong className="text-cyber-blue">2-3 posts diarios</strong> usando
          diferentes variaciones del prompt.
        </p>
      </motion.div>
    </div>
  )
}
