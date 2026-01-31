"use client"
import { useState, useEffect } from "react"
import { Marquee } from "@/components/magicui/marquee"

interface Testimonial {
  id: string
  clientName: string
  clientEmail: string
  clientImage: string
  rating: number
  review: string
  approved: boolean
}

const TestimonialCard = ({
  img,
  name,
  username,
  body,
  rating,
}: {
  img: string
  name: string
  username: string
  body: string
  rating: number
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-border/30 bg-card/90 backdrop-blur-sm p-10 shadow-xl">
      <div className="absolute -top-5 -left-5 h-40 w-40 rounded-full  from-[#2b0071]/20 to-transparent blur-md"></div>

      <div className="text-foreground/90 leading-relaxed font-medium">{body}</div>

      {/* Rating Stars */}
      <div className="mt-3 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2">
        <img src={img || "/placeholder.svg"} alt={name} height="40" width="40" className="h-10 w-10 rounded-full border-2 border-primary/30" />
        <div className="flex flex-col">
          <div className="leading-5 font-semibold tracking-tight text-foreground">{name}</div>
          <div className="leading-5 tracking-tight text-muted-foreground">{username}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        console.log('Fetching testimonials...')
        const response = await fetch('/api/testimonials')
        console.log('Response status:', response.status)
        const data = await response.json()
        console.log('Testimonials data:', data)
        console.log('Is array?', Array.isArray(data.data))
        console.log('Data length:', data.data?.length)
        
        if (data && data.data) {
          setTestimonials(data.data)
        }
      } catch (error) {
        console.error('Failed to fetch testimonials:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  if (loading) {
    return (
      <section id="testimonials" className="mb-0">
        <div className="mx-auto max-w-7xl flex justify-center items-center min-h-[400px]">
          <div className="text-foreground/70">Loading testimonials...</div>
        </div>
      </section>
    )
  }

  if (!testimonials || testimonials.length === 0) {
    console.log('Testimonials state:', testimonials)
    return (
      <section id="testimonials" className="mb-0">
        <div className="mx-auto max-w-7xl flex justify-center items-center min-h-[400px]">
          <div className="text-foreground/70">
            No testimonials available yet. (Check console for details)
          </div>
        </div>
      </section>
    )
  }

  const firstColumn = testimonials.slice(0, Math.ceil(testimonials.length / 3))
  const secondColumn = testimonials.slice(Math.ceil(testimonials.length / 3), Math.ceil(testimonials.length * 2 / 3))
  const thirdColumn = testimonials.slice(Math.ceil(testimonials.length * 2 / 3))

  return (
    <section id="testimonials" className="mb-0">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[450px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-foreground font-medium">Testimonials</span>
            </button>
          </div>
          <h2 className="mt-5 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
            What our clients say
          </h2>

          <p className="mt-5 relative z-10 text-center text-lg text-foreground/70 font-medium">
            From intuitive design to powerful features, our work has become an essential tool for clients around the world.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstColumn.map((testimonial) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  img={testimonial.clientImage}
                  name={testimonial.clientName}
                  username={testimonial.clientEmail}
                  body={testimonial.review}
                  rating={testimonial.rating}
                />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondColumn.map((testimonial) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  img={testimonial.clientImage}
                  name={testimonial.clientName}
                  username={testimonial.clientEmail}
                  body={testimonial.review}
                  rating={testimonial.rating}
                />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {thirdColumn.map((testimonial) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  img={testimonial.clientImage}
                  name={testimonial.clientName}
                  username={testimonial.clientEmail}
                  body={testimonial.review}
                  rating={testimonial.rating}
                />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="-mt-8 flex justify-center">
          <button className="group relative inline-flex items-center gap-2 rounded-full border border-[#2b0071]/30 bg-primary/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-[#2b0071]/60 hover:bg-[#2b0071]/20 active:scale-95">
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#2b0071]/40 to-transparent"></div>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#2b0071]/40 to-transparent"></div>
            <svg className="h-4 w-4 text-[#2b0071]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>
            Share your experience
          </button>
        </div>
      </div>
    </section>
  )
}
