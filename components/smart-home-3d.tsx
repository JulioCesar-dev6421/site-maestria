"use client"

import { useState } from "react"
import { Home, Lightbulb, Shield, Volume2, Thermometer, Camera } from "lucide-react"

const hotspots = [
  { id: 1, icon: Lightbulb, label: "Iluminação", x: 30, y: 40, color: "text-yellow-400" },
  { id: 2, icon: Shield, label: "Segurança", x: 70, y: 35, color: "text-red-400" },
  { id: 3, icon: Volume2, label: "Áudio", x: 50, y: 60, color: "text-purple-400" },
  { id: 4, icon: Thermometer, label: "Climatização", x: 25, y: 70, color: "text-cyan-400" },
  { id: 5, icon: Camera, label: "Câmeras", x: 75, y: 65, color: "text-green-400" },
]

export function SmartHome3D() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* 3D House Container */}
      <div className="relative w-full h-full glass-effect rounded-3xl p-8 animate-float">
        {/* House Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Home className="w-48 h-48 text-primary/20" strokeWidth={1} />
        </div>

        {/* Interactive Hotspots */}
        {hotspots.map((hotspot) => {
          const Icon = hotspot.icon
          return (
            <button
              key={hotspot.id}
              className={`absolute w-16 h-16 rounded-full glass-effect flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                activeHotspot === hotspot.id ? "scale-125 animate-glow-pulse" : ""
              }`}
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            >
              <Icon className={`w-8 h-8 ${hotspot.color}`} />
            </button>
          )
        })}

        {/* Hotspot Info Panel */}
        {activeHotspot && (
          <div className="absolute bottom-4 left-4 right-4 glass-effect rounded-xl p-4 animate-in slide-in-from-bottom-4">
            <h3 className="font-bold text-lg text-primary">{hotspots.find((h) => h.id === activeHotspot)?.label}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Controle inteligente e automatizado para máximo conforto
            </p>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
    </div>
  )
}
