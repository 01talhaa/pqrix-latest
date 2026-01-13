"use client"

import { X, Calendar, Users, Clock, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectModalProps {
  project: {
    name: string
    thumbnail: string
    client: string
    created: string
    tags: string
    description: string
    longDescription: string
    images: string[]
    techStack: string[]
    duration: string
    teamSize: string
    results: string[]
  } | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right z-10 w-10 h-10 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                  {project.client}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{project.name}</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">{project.description}</p>
            </div>

            {/* Main Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="md:col-span-2">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={project.images[0] || project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                {project.images.slice(1, 3).map((img, idx) => (
                  <div key={idx} className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                    <img src={img} alt={`${project.name} ${idx + 2}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-muted/30 rounded-2xl p-6 border border-border/30">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground">Timeline</span>
                </div>
                <p className="text-lg font-semibold text-foreground">{project.duration}</p>
                <p className="text-sm text-muted-foreground">{project.created}</p>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 border border-border/30">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground">Team Size</span>
                </div>
                <p className="text-lg font-semibold text-foreground">{project.teamSize}</p>
                <p className="text-sm text-muted-foreground">Cross-functional</p>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 border border-border/30">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground">Status</span>
                </div>
                <p className="text-lg font-semibold text-foreground">Completed</p>
                <p className="text-sm text-muted-foreground">In production</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Project Overview</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">{project.longDescription}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-muted/50 text-foreground font-medium border border-border/30 hover:bg-muted transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Results */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Key Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20"
                  >
                    <p className="text-2xl font-bold text-primary mb-1">{result.split(" ")[0]}</p>
                    <p className="text-foreground/70">{result.split(" ").slice(1).join(" ")}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.split(", ").map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-card text-sm font-medium border border-border/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
