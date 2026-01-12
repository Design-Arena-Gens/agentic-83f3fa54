'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const nicheVariations = [
  {
    niche: 'Música',
    icon: '🎵',
    keyword: 'music player',
    audience: 'Músicos, DJs, Productores',
    hooks: [
      '"El estudio de grabación del futuro ya está aquí 🎹"',
      '"Mezcla música con tu mente. Esta IA lo hace posible"',
      '"El software que los Grammy 2030 usarán"',
    ],
    color: 'cyber-purple',
  },
  {
    niche: 'Viajes',
    icon: '✈️',
    keyword: 'smart city map',
    audience: 'Viajeros, Nómadas Digitales',
    hooks: [
      '"Planifica viajes con hologramas. Sí, es real 🌍"',
      '"Google Maps en 2030 se verá así"',
      '"La app que encontrará tu próximo destino antes de que lo pienses"',
    ],
    color: 'cyber-blue',
  },
  {
    niche: 'Salud',
    icon: '🏥',
    keyword: 'medical scanner',
    audience: 'Médicos, Enfermeras, Fitness',
    hooks: [
      '"Diagnósticos en tiempo real flotando en el aire 💉"',
      '"La medicina del futuro no usa papel"',
      '"Esta IA detecta enfermedades antes que cualquier doctor"',
    ],
    color: 'cyber-pink',
  },
  {
    niche: 'Gaming',
    icon: '🎮',
    keyword: 'gaming interface',
    audience: 'Gamers, Streamers',
    hooks: [
      '"Controla juegos solo con tu voz. El futuro es hoy 👾"',
      '"El HUD que Fortnite copiará en 2026"',
      '"Twitch overlay nivel Dios con IA"',
    ],
    color: 'cyber-purple',
  },
  {
    niche: 'Negocios',
    icon: '💼',
    keyword: 'business dashboard',
    audience: 'Emprendedores, CEOs',
    hooks: [
      '"Warren Buffett usará esto en 2027 📊"',
      '"Dashboard que predice el mercado antes que suceda"',
      '"Tu startup necesita esta interfaz"',
    ],
    color: 'cyber-blue',
  },
  {
    niche: 'Educación',
    icon: '📚',
    keyword: 'learning platform',
    audience: 'Estudiantes, Profesores',
    hooks: [
      '"Aprende 3x más rápido con hologramas 3D 🧠"',
      '"Harvard usará esto en sus clases online"',
      '"El tutor IA que nunca duerme"',
    ],
    color: 'cyber-pink',
  },
]

export default function NicheVariations() {
  const [selectedNiche, setSelectedNiche] = useState<number | null>(null)
  const [copiedPrompt, setCopiedPrompt] = useState(false)

  const generatePrompt = (keyword: string) => {
    return `A close-up shot of a futuristic holographic interface floating in mid-air, displaying a complex AI ${keyword} visualization, glowing neon blue and purple data streams, cyberpunk aesthetic, glassmorphism style, photorealistic, 8k resolution, octane render, cinematic lighting, highly detailed, trending on ArtStation --ar 9:16 --stylize 250`
  }

  const copyPrompt = (keyword: string) => {
    navigator.clipboard.writeText(generatePrompt(keyword))
    setCopiedPrompt(true)
    setTimeout(() => setCopiedPrompt(false), 2000)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-cyber-pink text-glow-pink">
          Variaciones por Nicho de Audiencia
        </h2>
        <p className="text-gray-400 mb-2">
          Mantén la estética viral mientras atacas diferentes nichos
        </p>
        <p className="text-sm text-cyber-blue">
          🎯 Una sola palabra cambia todo: multiplica tu audiencia x10
        </p>
      </motion.div>

      {/* Niche Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {nicheVariations.map((niche, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedNiche(index)}
            className={`glassmorphism rounded-xl p-6 cursor-pointer transition-all duration-300 ${
              selectedNiche === index
                ? `shadow-neon-${niche.color} scale-105`
                : 'hover:scale-105'
            }`}
            whileHover={{ y: -5 }}
          >
            <div className="text-5xl mb-4 text-center">{niche.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">
              {niche.niche}
            </h3>
            <p className="text-sm text-gray-400 text-center mb-4">
              {niche.audience}
            </p>
            <div className={`text-xs px-3 py-2 rounded-full bg-${niche.color}/20 text-${niche.color} text-center font-mono`}>
              {niche.keyword}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Niche Details */}
      {selectedNiche !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glassmorphism rounded-xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{nicheVariations[selectedNiche].icon}</span>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {nicheVariations[selectedNiche].niche}
              </h3>
              <p className="text-gray-400">
                Audiencia: {nicheVariations[selectedNiche].audience}
              </p>
            </div>
          </div>

          {/* Hooks */}
          <div className="mb-6">
            <h4 className="font-bold text-cyber-blue mb-3">
              🎣 Hooks que Funcionan para este Nicho:
            </h4>
            <div className="space-y-3">
              {nicheVariations[selectedNiche].hooks.map((hook, idx) => (
                <div
                  key={idx}
                  className="bg-black/30 rounded-lg p-4 border-l-4 border-cyber-purple"
                >
                  <p className="text-white">{hook}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Generated Prompt */}
          <div className="mb-6">
            <h4 className="font-bold text-cyber-purple mb-3">
              ✨ Prompt Generado:
            </h4>
            <div className="bg-black/50 rounded-lg p-4 mb-4">
              <code className="text-sm text-gray-300 break-words">
                {generatePrompt(nicheVariations[selectedNiche].keyword)}
              </code>
            </div>
            <motion.button
              onClick={() => copyPrompt(nicheVariations[selectedNiche].keyword)}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                copiedPrompt
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-cyber hover:shadow-neon-purple'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {copiedPrompt ? '✓ Copiado!' : '📋 Copiar Prompt Personalizado'}
            </motion.button>
          </div>

          {/* Strategy Tip */}
          <div className="bg-gradient-cyber/10 border border-cyber-pink/30 rounded-lg p-6">
            <h4 className="font-bold text-cyber-pink mb-2">
              💡 Estrategia Multi-Nicho:
            </h4>
            <p className="text-gray-300 text-sm">
              Crea una <strong className="text-white">cuenta diferente para cada nicho</strong> o
              alterna contenido cada 2-3 días para atraer múltiples audiencias a una sola cuenta.
              El algoritmo recompensará tu versatilidad con mayor alcance.
            </p>
          </div>
        </motion.div>
      )}

      {/* Instructions */}
      {selectedNiche === null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glassmorphism rounded-xl p-8 text-center"
        >
          <div className="text-5xl mb-4">👆</div>
          <p className="text-gray-300">
            Selecciona un nicho arriba para ver hooks, prompts personalizados y estrategia
          </p>
        </motion.div>
      )}
    </div>
  )
}
