"use client"

import { teamMembers } from "@/data/team"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { FadeSlideReveal } from "@/components/fade-slide-reveal"
import { Card3D } from "@/components/3d-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TeamSection() {
  return (
    <SectionWrapper>
      <FadeSlideReveal delay={0} duration={0.8}>
        <SectionHeader
          subtitle="Meet the Creators"
          title="Our Elite Team"
          description="Talented individuals dedicated to pushing creative boundaries"
          // If SectionHeader supports custom subtitle colors via props, apply them here, 
          // otherwise it usually inherits from the theme's primary color.
        />
      </FadeSlideReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <FadeSlideReveal key={member.id} delay={index * 0.15} duration={0.9}>
            <Card3D className="h-full">
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 h-full hover:border-[#F5A623]/50 transition-all duration-300 space-y-4 group hover:shadow-xl hover-lift">
                
                {/* Avatar with Custom Gradient Glow */}
                <div className="relative w-24 h-24 mx-auto ambient-motion-3d">
                  {/* Updated Glow to use #F5A623 and #FF8C00 */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F5A623]/30 to-[#FF8C00]/50 blur-lg pulse-glow" />
                  <Avatar className="h-24 w-24 relative border-2 border-[#F5A623]/30 group-hover:border-[#FF8C00] transition-all duration-300 group-hover:scale-110">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="bg-muted">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Content */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold leading-tight group-hover:text-[#F5A623] transition-colors duration-300">
                    {member.name}
                  </h3>
                  {/* Role text updated to brand orange */}
                  <p className="text-sm text-[#FF8C00] font-medium group-hover:scale-105 transition-transform duration-300">
                    {member.role}
                  </p>
                  <p className="text-xs text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {member.bio}
                  </p>
                </div>

                {/* Specialties Badges updated to orange theme */}
                <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-border/30">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={specialty}
                      className={`px-2 py-1 rounded-full bg-[#F5A623]/10 text-xs font-medium text-[#FF8C00] hover:bg-[#F5A623]/20 border border-[#F5A623]/10 transition-all duration-300 hover:scale-110 cascade-stagger stagger-${(i % 5) + 1}`}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </Card3D>
          </FadeSlideReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}