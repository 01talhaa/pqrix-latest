import { MainHeader } from "@/components/main-header"
import { ArrowLeft, Target, Users, Zap, Award, Globe, Code } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through transparent collaboration."
    },
    {
      icon: Zap,
      title: "Agile & Efficient",
      description: "Fast execution without compromising quality. We adapt quickly to changes and deliver on time."
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "We maintain the highest standards in code quality, design, and user experience."
    }
  ]

  const expertise = [
    { category: "Frontend Development", skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend Development", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Cloud & DevOps", skills: ["AWS", "Docker", "CI/CD", "Kubernetes"] },
    { category: "Mobile Development", skills: ["React Native", "Flutter", "iOS", "Android"] }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full bg-primary opacity-40 blur-3xl" />
      <div className="absolute top-1/3 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#2b0071]/20 to-[#5E14E4]/20 blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#2b0071]/20 to-[#5E14E4]/20 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        {/* <header className="mb-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors">
              <div className="p-2 rounded-full border border-border/30 group-hover:border-[#2b0071]/50 transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/about" className="text-sm font-medium text-[#2b0071]">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </header> */}
        <MainHeader/>

        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex mb-6">
            <button
              type="button"
              className="group relative rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500 group-hover:w-3/4" />
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500" />
              <span className="relative text-foreground font-medium">About Pqrix</span>
            </button>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent mb-6">
            Building the Future,
            <br />One Solution at a Time
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate technologists, designers, and innovators dedicated to creating
            exceptional digital experiences that drive business growth and transform industries.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm p-8 shadow-xl">
            <div className="absolute -top-5 -right-5 h-32 w-32 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl" />
            <div className="relative">
              <Globe className="w-12 h-12 text-[#2b0071] mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-foreground/70 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that are not only powerful
                and scalable, but also intuitive and beautiful. We believe technology should enhance human
                potential, not complicate it.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm p-8 shadow-xl">
            <div className="absolute -top-5 -right-5 h-32 w-32 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl" />
            <div className="relative">
              <Code className="w-12 h-12 text-[#2b0071] mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-foreground/70 leading-relaxed">
                Founded by a team of industry veterans, Pqrix emerged from a shared vision: to create a
                technology partner that truly understands business needs. Today, we serve clients across the
                globe, delivering solutions that matter.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-foreground/70 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2b0071]/5 via-transparent to-[#2b0071]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2b0071] to-[#5E14E4] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent mb-4">
              Technical Expertise
            </h2>
            <p className="text-foreground/70 text-lg">Mastering the technologies that power modern business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm p-6 shadow-xl"
              >
                <div className="absolute -top-5 -right-5 h-24 w-24 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl" />
                <div className="relative">
                  <h3 className="text-lg font-bold text-foreground mb-4">{item.category}</h3>
                  <div className="space-y-2">
                    {item.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#2b0071] to-[#5E14E4]" />
                        <span className="text-sm text-foreground/70">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into reality with cutting-edge technology solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#2b0071] px-8 py-4 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
