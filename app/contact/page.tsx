"use client"

import type React from "react"

import { ArrowLeft, Mail, MapPin, Send, Phone, Clock, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { MainHeader } from "@/components/main-header"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@pqrix.com",
      link: "mailto:hello@pqrix.com",
      description: "Get in touch via email"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Mon-Fri 9am-6pm EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Global Headquarters",
      link: "#",
      description: "Worldwide presence"
    }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full bg-primary opacity-40 blur-3xl" />
      <div className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#2b0071]/20 to-[#5E14E4]/20 blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#2b0071]/20 to-[#5E14E4]/20 blur-3xl" />

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
              <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-[#2b0071]">
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
              <span className="relative text-foreground font-medium">Get In Touch</span>
            </button>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent mb-6">
            Let's Build Something
            <br />Amazing Together
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to explore possibilities, we're here to help.
            Reach out and let's start a conversation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group relative overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2b0071]/5 via-transparent to-[#2b0071]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-5 -right-5 h-32 w-32 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2b0071] to-[#5E14E4] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-[#2b0071] font-semibold mb-1">{info.value}</p>
                  <p className="text-sm text-foreground/60">{info.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3 relative overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm p-8 md:p-10 shadow-xl">
              <div className="absolute -top-5 -right-5 h-40 w-40 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl" />
              <div className="relative">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] rounded-full flex items-center justify-center mb-6">
                      <Send className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-3">Message Sent!</h3>
                    <p className="text-foreground/70 text-center max-w-md">
                      Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-foreground mb-3">Send us a Message</h2>
                      <p className="text-foreground/70">Fill out the form below and we'll be in touch soon.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                            Your Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-xl focus:outline-none focus:border-[#2b0071] focus:ring-2 focus:ring-[#2b0071]/20 transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-xl focus:outline-none focus:border-[#2b0071] focus:ring-2 focus:ring-[#2b0071]/20 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                          Subject *
                        </label>
                        <input
                          id="subject"
                          type="text"
                          placeholder="How can we help you?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-xl focus:outline-none focus:border-[#2b0071] focus:ring-2 focus:ring-[#2b0071]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          placeholder="Tell us about your project, requirements, or questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-xl focus:outline-none focus:border-[#2b0071] focus:ring-2 focus:ring-[#2b0071]/20 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group w-full relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2b0071] to-[#5E14E4] px-8 py-4 font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                      >
                        <Send className="h-5 w-5" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Response */}
              <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] p-8 shadow-xl">
                <div className="relative text-white">
                  <Clock className="w-12 h-12 mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-2">Quick Response</h3>
                  <p className="text-white/90 leading-relaxed">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm p-8 shadow-xl">
                <div className="absolute -top-5 -right-5 h-32 w-32 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl" />
                <div className="relative">
                  <MessageSquare className="w-10 h-10 text-[#2b0071] mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Frequently Asked</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">What services do you offer?</p>
                      <p className="text-foreground/70">Full-stack development, cloud solutions, mobile apps, and consulting.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">How long does a project take?</p>
                      <p className="text-foreground/70">Typically 4-12 weeks, depending on complexity and scope.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Do you work globally?</p>
                      <p className="text-foreground/70">Yes! We serve clients worldwide across all time zones.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-[#FBFFFF] backdrop-blur-sm p-8 shadow-xl">
                <div className="absolute -top-5 -right-5 h-32 w-32 rounded-full bg-gradient-to-b from-[#2b0071]/20 to-transparent blur-2xl" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="px-4 py-2 rounded-full bg-gradient-to-br from-[#2b0071]/10 to-[#5E14E4]/10 text-[#2b0071] font-medium hover:from-[#2b0071] hover:to-[#5E14E4] hover:text-white transition-all duration-300">
                      LinkedIn
                    </a>
                    <a href="#" className="px-4 py-2 rounded-full bg-gradient-to-br from-[#2b0071]/10 to-[#5E14E4]/10 text-[#2b0071] font-medium hover:from-[#2b0071] hover:to-[#5E14E4] hover:text-white transition-all duration-300">
                      Twitter
                    </a>
                    <a href="#" className="px-4 py-2 rounded-full bg-gradient-to-br from-[#2b0071]/10 to-[#5E14E4]/10 text-[#2b0071] font-medium hover:from-[#2b0071] hover:to-[#5E14E4] hover:text-white transition-all duration-300">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
                    <WhatsAppButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
