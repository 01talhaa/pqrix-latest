"use client"

import { teamMembers } from "@/data/team"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { FadeSlideReveal } from "@/components/fade-slide-reveal"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, MapPin, GraduationCap, Briefcase } from "lucide-react"

export function TeamSection() {
  return (
    <SectionWrapper>
      <FadeSlideReveal delay={0} duration={0.2}>
        <SectionHeader
          subtitle="Meet the Creators"
          title="Our Elite Team"
          description="Talented individuals dedicated to pushing creative boundaries"
        />
      </FadeSlideReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <FadeSlideReveal key={member.id} delay={0} duration={0.2}>
            <div className="flip-card-container h-[400px]">
              <div className="flip-card">
                {/* Front of Card */}
                <div className="flip-card-front">
                  <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 h-full hover:border-[#2b0071]/50 transition-all duration-300 space-y-4 group flex flex-col items-center justify-center">
                    
                    {/* Avatar */}
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2b0071]/30 to-[#2b0071]/50 blur-lg pulse-glow" />
                      <Avatar className="h-32 w-32 relative border-4 border-[#2b0071]/30 transition-all duration-300">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-muted text-2xl">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Name and Role */}
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-2xl text-[#2b0071] font-semibold">
                        {member.role}
                      </p>
                    </div>

                    {/* Hover Hint */}
                    <p className="text-xs text-muted-foreground mt-auto">
                      Hover to see details
                    </p>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back">
                  <div className="bg-gradient-to-br from-[#2b0071] to-[#5E14E4] rounded-2xl p-6 h-full flex flex-col justify-between text-white shadow-2xl">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold border-b border-white/20 pb-2">
                        {member.name}
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        {/* Bio */}
                        <p className="text-white/90 leading-relaxed">
                          {member.bio}
                        </p>

                        {/* Education */}
                        <div className="flex items-start gap-2">
                          <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">{member.education}</span>
                        </div>

                        {/* Experience */}
                        <div className="flex items-start gap-2">
                          <Briefcase className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">{member.experience} experience</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">{member.location}</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-2">
                          <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">{member.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="space-y-2 pt-4 border-t border-white/20">
                      <p className="text-xs font-semibold uppercase tracking-wide">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-1 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeSlideReveal>
        ))}
      </div>

      <style jsx>{`
        .flip-card-container {
          perspective: 2000px;
        }

        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-container:hover .flip-card {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 1rem;
        }

        .flip-card-front {
          background-color: whitesmoke;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </SectionWrapper>
  )
}