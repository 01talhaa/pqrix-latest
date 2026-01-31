"use client"
import { useState, useEffect } from "react"
import { InsightModal } from "@/components/insight-modal"
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

export function InsightsSection() {
  const [industryInsights, setIndustryInsights] = useState<IndustryInsight[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedInsight, setSelectedInsight] = useState<IndustryInsight | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        console.log('Fetching insights...')
        const response = await fetch('/api/insights')
        console.log('Response status:', response.status)
        const data = await response.json()
        console.log('Insights data:', data)
        console.log('Is array?', Array.isArray(data.data))
        console.log('Data length:', data.data?.length)
        
        if (data && data.data) {
          setIndustryInsights(data.data)
        }
      } catch (error) {
        console.error('Failed to fetch insights:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [])

  const handleInsightClick = (insight: IndustryInsight) => {
    setSelectedInsight(insight)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedInsight(null), 300)
  }

  if (loading) {
    return (
      <section id="insights" className="relative overflow-hidden py-12 sm:py-24 md:py-32">
        <div className="container mx-auto flex justify-center items-center min-h-[400px]">
          <div className="text-foreground/70">Loading insights...</div>
        </div>
      </section>
    )
  }

  if (!industryInsights || industryInsights.length === 0) {
    console.log('Insights state:', industryInsights)
    return (
      <section id="insights" className="relative overflow-hidden py-12 sm:py-24 md:py-32">
        <div className="container mx-auto flex justify-center items-center min-h-[400px]">
          <div className="text-foreground/70">
            No insights available yet. (Check console for details)
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="insights" className="relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent"></div>
      
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="mx-auto max-w-[640px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative  mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-foreground font-medium">Industry Trends</span>
            </button>
          </div>
          <h2 className="mt-5 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
            Latest Insights
          </h2>
          <p className="mt-5 relative z-10 text-center text-lg text-foreground/70 font-medium">
            Exploring the cutting-edge trends and innovations shaping the future of design
          </p>
        </div>

{/* Insights Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl">
  {/* FEATURED INSIGHT */}
  {industryInsights[0] && (
    <div
      onClick={() => handleInsightClick(industryInsights[0])}
      className="lg:col-span-2 group cursor-pointer overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm shadow-xl relative"
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b0071]/5 via-transparent to-[#2b0071]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Decorative blur */}
      <div className="absolute -top-5 -right-5 -z-10 h-32 w-32 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl"></div>

      {/* Image */}
      <div className="relative h-[320px] w-full overflow-hidden">
        <img
          src={industryInsights[0].featuredImage}
          alt={industryInsights[0].title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-gradient-to-br from-[#2b0071] to-[#5E14E4] text-white text-xs font-semibold">
            {industryInsights[0].category}
          </span>
        </div>

        {/* Title on image */}
        <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white leading-snug">
          {industryInsights[0].title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
          {industryInsights[0].excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-medium text-primary">
            by {industryInsights[0].author.name}
          </p>
          <div className="flex items-center gap-3 text-xs text-foreground/60">
            <span>{industryInsights[0].readTime} min read</span>
            <span>•</span>
            <span>{industryInsights[0].views} views</span>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* SIDE INSIGHTS */}
  <div className="flex flex-col gap-6">
    {industryInsights.slice(1, 3).map((insight, index) => (
      <div
        key={insight.id}
        onClick={() => handleInsightClick(insight)}
        className="group cursor-pointer overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm shadow-xl flex relative"
      >
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b0071]/5 via-transparent to-[#2b0071]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Decorative blur */}
        <div className="absolute -top-5 -right-5 -z-10 h-32 w-32 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl"></div>

        {/* Thumbnail */}
        <div className="relative w-40 shrink-0 overflow-hidden">
          <img
            src={insight.featuredImage}
            alt={insight.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between relative">
          <div>
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-br from-[#2b0071] to-[#5E14E4] text-white text-[10px] font-semibold">
              {insight.category}
            </span>
            <h4 className="text-lg font-semibold leading-snug text-foreground group-hover:text-[#2b0071] transition-colors duration-300 mt-2">
              {insight.title}
            </h4>
            <p className="mt-2 text-sm text-foreground/70 line-clamp-3 group-hover:text-foreground/90 transition-colors duration-300">
              {insight.excerpt}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs font-medium text-primary">
              by {insight.author.name}
            </p>
            <span className="text-[10px] text-foreground/60">{insight.readTime} min</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Bottom CTA */}
        <div className="flex justify-center mt-8">
          <Link href="https://app.pqrix.com/insights" className="text-sm font-medium text-foreground hover:underline">
          <button className="group relative inline-flex items-center gap-2 rounded-full border border-[#2b0071]/30 bg-primary/10 backdrop-blur-sm px-8 py-4 text-sm font-medium text-foreground transition-all hover:border-[#2b0071]/60 hover:bg-[#2b0071]/20 active:scale-95">
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#2b0071]/40 to-transparent"></div>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#2b0071]/40 to-transparent"></div>
            
              Explore All Insights
            
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          </Link>
        </div>
      </div>

      {/* Insight Modal */}
      <InsightModal insight={selectedInsight} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
