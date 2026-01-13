"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ImageGalleryProps {
  images: string[]
  projectName: string
}

export function ImageGallery({ images, projectName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const openImage = (index: number) => {
    setSelectedImage(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
    setIsFullscreen(false)
  }

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && modalRef.current) {
        await modalRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else if (document.fullscreenElement) {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err)
    }
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen()
      } else if (e.key === 'Escape') {
        if (!document.fullscreenElement) {
          closeImage()
        }
      } else if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      }
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    window.addEventListener('keydown', handleKeyPress)
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [selectedImage])

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openImage(index)}
            className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image}
              alt={`${projectName} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <div 
            ref={modalRef}
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all ${isFullscreen ? 'p-0' : 'p-4'}`}
          >
            {/* Close Button */}
            <button
              onClick={closeImage}
              className={`absolute z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all ${isFullscreen ? 'top-2 right-2' : 'top-4 right-4'}`}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className={`absolute z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all ${isFullscreen ? 'top-2 right-16' : 'top-4 right-20'}`}
              title="Fullscreen (F)"
            >
              {isFullscreen ? (
                <Minimize className="w-6 h-6 text-white" />
              ) : (
                <Maximize className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                onClick={prevImage}
                className={`absolute z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all ${isFullscreen ? 'left-2' : 'left-4'}`}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={nextImage}
                className={`absolute z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all ${isFullscreen ? 'right-2' : 'right-4'}`}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`relative w-full h-full flex items-center justify-center ${isFullscreen ? 'max-w-full max-h-full' : 'max-w-6xl max-h-[90vh]'}`}
            >
              <img
                src={images[selectedImage]}
                alt={`${projectName} ${selectedImage + 1}`}
                className={`max-w-full max-h-full object-contain ${isFullscreen ? 'rounded-none' : 'rounded-2xl'}`}
              />
            </motion.div>

            {/* Image Counter */}
            <div className={`absolute left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium transition-all ${isFullscreen ? 'bottom-2' : 'bottom-4'}`}>
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}