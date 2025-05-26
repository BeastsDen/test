
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechCorp Solutions",
    content: "Hackure transformed our security posture completely. Their proactive approach and 24/7 monitoring gave us the peace of mind we needed to focus on our core business.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    title: "CEO",
    company: "FinanceFirst Inc",
    content: "The incident response team at Hackure is exceptional. When we faced a potential breach, they responded within minutes and contained the threat before any damage occurred.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Jennifer Rodriguez",
    title: "IT Director",
    company: "Healthcare Plus",
    content: "Hackure's compliance expertise helped us achieve SOC 2 certification seamlessly. Their team understood our industry requirements and delivered beyond expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Park",
    title: "CISO",
    company: "Global Manufacturing",
    content: "Working with Hackure has been a game-changer. Their vulnerability assessments uncovered critical issues we didn't know existed, and their solutions were implemented flawlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    title: "VP of Operations",
    company: "RetailMax",
    content: "The security training program from Hackure significantly improved our team's awareness. We've seen a 90% reduction in phishing incidents since implementation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Robert Williams",
    title: "COO",
    company: "StartupVentures",
    content: "As a growing startup, we needed enterprise-level security without the complexity. Hackure delivered exactly that with their scalable solutions and expert guidance.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

export default function TestimonialsSection() {
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                    />
                    <div>
                      <div className="font-semibold text-cyber-light">{testimonial.name}</div>
                      <div className="text-sm text-cyber-gray">{testimonial.title}</div>
                      <div className="text-sm text-purple-400">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-cyber-gray mb-6">
            Join hundreds of satisfied clients who trust Hackure with their cybersecurity needs.
          </p>
          <div className="flex items-center justify-center space-x-8 text-cyber-gray">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">500+</div>
              <div className="text-sm">Protected Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
