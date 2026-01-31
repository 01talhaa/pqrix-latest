"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

interface IndustryInsight {
  _id: string
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  featuredImage: string
  author: {
    name: string
    role: string
    avatar: string
    bio: string
  }
  views: number
  readTime: number
  publishDate: string
  featured: boolean
  isPublished: boolean
}

interface InsightModalProps {
  insight: IndustryInsight | null
  isOpen: boolean
  onClose: () => void
}

export function InsightModal({ insight, isOpen, onClose }: InsightModalProps) {
  if (!insight) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl z-50"
          >
            <div className="bg-card/95 backdrop-blur-xl rounded-3xl border border-border/40 shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
              
              {/* Image Header */}
              <div className="relative h-56 md:h-72 w-full overflow-hidden">
                <img
                  src={insight.featuredImage}
                  alt={insight.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/70 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Header Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                  <span className="font-medium text-primary">{insight.category}</span>
                  <span>•</span>
                  <span>{insight.readTime} min read</span>
                  <span>•</span>
                  <span>{insight.views} views</span>
                  <span>•</span>
                  <span>by {insight.author.name}</span>
                </div>

                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
                  {insight.title}
                </h2>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-8">
                <p className="text-lg font-medium text-foreground/80 leading-relaxed mb-6">
                  {insight.excerpt}
                </p>

                <div className="h-px bg-border/30 mb-6" />

                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/70 leading-relaxed whitespace-pre-line">
                    {insight.content}
                  </p>
                </div>

                {/* Tags */}
                {insight.tags && insight.tags.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {insight.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-foreground/70"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-border/30 px-6 md:px-8 py-5 bg-muted/20 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Stay updated with PQRIX Tech insights
                </span>
                <Link href="https://app.pqrix.com/insights" className="text-sm font-medium text-primary hover:underline">
                <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition hover:scale-105 active:scale-95">
                  Explore More
                </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
