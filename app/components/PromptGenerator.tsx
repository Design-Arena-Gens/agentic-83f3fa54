'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const basePrompts = [
  {
    title: 'Neural Network (Base Ganador)',
    prompt: 'A close-up shot of a futuristic holographic interface floating in mid-air, displaying a complex AI neural network visualization, glowing neon blue and purple data streams, cyberpunk aesthetic, glassmorphism style, photorealistic, 8k resolution, octane render, cinematic lighting, highly detailed, trending on ArtStation --ar 9:16 --stylize 250',
    category: 'Base',
    color: 'cyber-blue',
  },
  {
    title: 'Music Player Futurista',
    prompt: 'A close-up shot of a futuristic holographic interface floating in mid-air, displaying a complex AI music player visualization, glowing neon blue and purple data streams, cyberpunk aesthetic, glassmorphism style, photorealistic, 8k resolution, octane render, cinematic lighting, highly detailed, trending on ArtStation --ar 9:16 --stylize 250',
    category: 'Música',
    color: 'cyber-purple',
  },
  {
    title: 'Smart City Map',
    prompt: 'A close-up shot of a futuristic holographic interface floating in mid-air, displaying a complex AI smart city map visualization, glowing neon blue and purple data streams, cyberpunk aesthetic, glassmorphism style, photorealistic, 8k resolution, octane render, cinematic lighting, highly detailed, trending on ArtStation --ar 9:16 --stylize 250',
    category: 'Viajes',
    color: 'cyber-pink',
  },
  {
    title: 'Medical Scanner',
    prompt: 'A close-up shot of a futuristic holographic interface floating in mid-air, displaying a complex AI medical scanner visualization, glowing neon blue and purple data streams, cyberpunk aesthetic, glassmorphism style, photorealistic, 8k resolution, octane render, cinematic lighting, highly detailed, trending on ArtStation --ar 9:16 --stylize 250',
    category: 'Salud',
    color: 'cyber-blue',
  },
]

export default function PromptGenerator() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-cyber-blue text-glow-blue">
          Prompts Virales Listos para Usar
        </h2>
        <p className="text-gray-400">
          Copia, pega en Midjourney/DALL-E, y genera contenido que detiene el scroll
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {basePrompts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glassmorphism rounded-xl p-6 hover:shadow-neon-blue transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <span className={`text-xs px-3 py-1 rounded-full bg-${item.color}/20 text-${item.color}`}>
                  {item.category}
                </span>
              </div>
            </div>

            <div className="bg-black/50 rounded-lg p-4 mb-4 max-h-40 overflow-y-auto">
              <code className="text-sm text-gray-300 break-words">{item.prompt}</code>
            </div>

            <motion.button
              onClick={() => copyToClipboard(item.prompt, index)}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                copiedIndex === index
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-cyber hover:shadow-neon-purple'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {copiedIndex === index ? '✓ Copiado!' : '📋 Copiar Prompt'}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Why This Works Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 glassmorphism rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold mb-6 text-cyber-purple text-glow-purple">
          ¿Por qué estos prompts te darán 30k seguidores?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: '📱',
              title: '--ar 9:16',
              desc: 'Formato vertical que ocupa toda la pantalla del móvil',
            },
            {
              icon: '🧠',
              title: 'Holographic + AI Neural Network',
              desc: 'Ataca la curiosidad sobre el futuro de la IA',
            },
            {
              icon: '🎨',
              title: 'Neon Blue & Purple',
              desc: 'Colores que mejor performean en Instagram actualmente',
            },
            {
              icon: '✨',
              title: 'Photorealistic 8K',
              desc: 'Parece una foto real de ciencia ficción, no un dibujo',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
