"use client"

import { useState, useEffect } from "react"
import { MapPin, Briefcase, DollarSign, Clock } from "lucide-react"
import { JobModal } from "@/components/job-modal"

interface JobOpening {
  _id: string
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
  niceToHave: string[]
  benefits: string[]
  status: string
  featured: boolean
  remote: boolean
  applicationsCount: number
  salary: string
}

export function CareerSection() {
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log('Fetching careers...')
        const response = await fetch('/api/careers')
        console.log('Response status:', response.status)
        const data = await response.json()
        console.log('Career data:', data)
        console.log('Is array?', Array.isArray(data.data))
        console.log('Data length:', data.data?.length)
        
        if (data && data.data) {
          setJobOpenings(data.data)
        }
      } catch (error) {
        console.error('Failed to fetch job openings:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  const handleJobClick = (job: JobOpening) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedJob(null), 300)
  }

  if (loading) {
    return (
      <section id="careers" className="relative overflow-hidden">
        <div className="container mx-auto flex justify-center items-center min-h-[400px]">
          <div className="text-foreground/70">Loading job openings...</div>
        </div>
      </section>
    )
  }

  if (!jobOpenings || jobOpenings.length === 0) {
    console.log('Job openings state:', jobOpenings)
    return (
      <section id="careers" className="relative overflow-hidden">
        <div className="container mx-auto flex justify-center items-center min-h-[400px]">
          <div className="text-foreground/70">
            No job openings available at the moment. (Check console for details)
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="careers" className="relative overflow-hidden">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent"></div>
      
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="mx-auto max-w-[640px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-foreground font-medium">Join Our Team</span>
            </button>
          </div>
          <h2 className="mt-5 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
            Career Opportunities
          </h2>
          <p className="mt-5 relative z-10 text-center text-lg text-foreground/70 font-medium">
            Join a team of passionate technologists and help us create exceptional digital solutions
          </p>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {jobOpenings.map((job, index) => (
            <div
              key={job.id}
              onClick={() => handleJobClick(job)}
              className="group relative overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm p-8 shadow-xl cursor-pointer"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2b0071]/5 via-transparent to-[#2b0071]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative blur */}
              <div className="absolute -top-5 -right-5 -z-10 h-32 w-32 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl"></div>

              {/* Content */}
              <div className="relative space-y-4">
                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  {job.featured && (
                    <span className="px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-semibold">
                      ⭐ Featured
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full bg-gradient-to-br from-[#2b0071] to-[#5E14E4] text-white text-xs font-semibold">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-foreground text-xs font-semibold">
                    {job.type}
                  </span>
                  {job.remote && (
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      🌍 Remote
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground group-hover:text-[#2b0071] transition-colors duration-300">
                  {job.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {job.description}
                </p>

                {/* Details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/30 flex-wrap">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.experience}</span>
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.applicationsCount} applications</span>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="flex justify-end pt-2">
                  <div className="px-6 py-2 rounded-full bg-gradient-to-br from-[#2b0071] to-[#5E14E4] text-white font-medium group-hover:bg-[#e78a53]/20 transition-all duration-300">
                    View & Apply →
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <p className="text-center text-foreground/70">
            Don't see a perfect fit? We're always looking for talented people.
          </p>
          <button className="group relative inline-flex items-center gap-2 rounded-full border border-[#2b0071]/30 bg-primary/10 backdrop-blur-sm px-8 py-4 text-sm font-medium text-foreground transition-all hover:border-[#2b0071]/60 hover:bg-[#2b0071]/20 active:scale-95">
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#2b0071]/40 to-transparent"></div>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#2b0071]/40 to-transparent"></div>
            <span>Send Us Your Resume</span>
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
        </div>
      </div>

      {/* Job Application Modal */}
      <JobModal job={selectedJob} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
