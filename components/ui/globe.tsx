"use client"

import createGlobe from "cobe"
import { useEffect, useRef, useState } from "react"

export default function Earth({
  baseColor = [0.6, 0.2, 0.8],
  markerColor = [255, 255, 255],
  glowColor = [0.906, 0.541, 0.325],
  dark = 1,
}: {
  baseColor?: [number, number, number]
  markerColor?: [number, number, number]
  glowColor?: [number, number, number]
  dark?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    // Optimize settings for mobile devices
    const isMobileDevice = window.innerWidth < 768
    const pixelRatio = isMobileDevice ? 1 : 2
    const size = isMobileDevice ? 400 : 600
    const samples = isMobileDevice ? 8000 : 16000

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: pixelRatio,
      width: size * 0.9,
      height: size * 1.1,
      phi: 0,
      theta: 0,
      dark: dark,
      diffuse: 1,
      mapSamples: samples,
      mapBrightness: 6,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += isMobileDevice ? 0.005 : 0.01 // Slower rotation on mobile
      },
    })

    return () => {
      globe.destroy()
    }
  }, [baseColor, markerColor, glowColor, dark])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: isMobile ? 400 : 400, height: isMobile ? 400 : 400, maxWidth: "800%", aspectRatio: 1 }}
    />
  )
}
