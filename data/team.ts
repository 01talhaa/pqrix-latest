export const teamMembers = [
  {
    id: 1,
    name: "Fons Mans",
    role: "Lead Designer & Founder",
    bio: "Visionary designer with 10+ years of industry experience",
    image: "/diverse-professional-profiles.png",
    specialties: ["UI/UX", "Brand Strategy", "Visual Design"],
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "Senior Creative Director",
    bio: "Expert in motion design and interactive experiences",
    image: "/abstract-geometric-profile.png",
    specialties: ["Motion Design", "Animation", "Creative Direction"],
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    role: "UX Researcher",
    bio: "Data-driven designer focused on user-centered solutions",
    image: "/profile-4.png",
    specialties: ["Research", "UX Strategy", "Analytics"],
  },
  {
    id: 4,
    name: "Marcus Thompson",
    role: "Branding Specialist",
    bio: "Crafting powerful brand identities that resonate",
    image: "/folded-paper.jpg",
    specialties: ["Branding", "Typography", "Logo Design"],
  },
]

export type TeamMember = (typeof teamMembers)[number]
