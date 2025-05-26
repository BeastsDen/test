
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechCorp Solutions",
    content: "Hackure transformed our security posture completely. Their proactive approach and 24/7 monitoring gave us the peace of mind we needed to focus on our core business.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "CEO",
    company: "FinanceFirst Inc",
    content: "The incident response team at Hackure is exceptional. When we faced a potential breach, they responded within minutes and contained the threat before any damage occurred.",
    rating: 5,
  },
  {
    name: "Jennifer Rodriguez",
    title: "IT Director",
    company: "Healthcare Plus",
    content: "Hackure's compliance expertise helped us achieve SOC 2 certification seamlessly. Their team understood our industry requirements and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "David Park",
    title: "CISO",
    company: "Global Manufacturing",
    content: "Working with Hackure has been a game-changer. Their vulnerability assessments uncovered critical issues we didn't know existed, and their solutions were implemented flawlessly.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    title: "VP of Operations",
    company: "RetailMax",
    content: "The security training program from Hackure significantly improved our team's awareness. We've seen a 90% reduction in phishing incidents since implementation.",
    rating: 5,
  },
  {
    name: "Robert Williams",
    title: "COO",
    company: "StartupVentures",
    content: "As a growing startup, we needed enterprise-level security without the complexity. Hackure delivered exactly that with their scalable solutions and expert guidance.",
    rating: 5,
  }
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-cyber-darker/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto">
            Trusted by industry leaders worldwide. See how Hackure has transformed cybersecurity for organizations of all sizes.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={scrollLeft}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cyber-navy/80 border-purple-500/30 hover:border-purple-500/60 backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4 text-purple-400" />
          </Button>
          
          <Button
            onClick={scrollRight}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cyber-navy/80 border-purple-500/30 hover:border-purple-500/60 backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4 text-purple-400" />
          </Button>

          {/* Scrolling Testimonials */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-96"
              >
                <Card className="bg-cyber-navy/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-purple-500/60" />
                    </div>
                    
                    {/* Testimonial Content */}
                    <blockquote className="text-cyber-gray leading-relaxed mb-6 flex-grow">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    {/* Author Info (without photo) */}
                    <div className="space-y-1">
                      <div className="font-semibold text-cyber-light">{testimonial.name}</div>
                      <div className="text-sm text-cyber-gray">{testimonial.title}</div>
                      <div className="text-sm text-purple-400">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
