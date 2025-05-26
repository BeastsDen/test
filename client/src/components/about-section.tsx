import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cyber-dark to-cyber-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                About Hackure
              </span>
            </h2>
            <p className="text-xl text-cyber-gray mb-8 leading-relaxed">
              Founded by cybersecurity experts with decades of experience, Hackure is dedicated to protecting organizations from the ever-evolving landscape of cyber threats.
            </p>
            <p className="text-lg text-cyber-gray mb-8 leading-relaxed">
              Our team combines cutting-edge technology with deep industry knowledge to deliver comprehensive security solutions that adapt to your unique business needs. We believe that effective cybersecurity is not just about technology—it's about understanding your business and creating tailored protection strategies.
            </p>
            
            {/* Mission & Vision */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mt-1">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyber-light mb-2">Our Mission</h3>
                  <p className="text-cyber-gray">To make advanced cybersecurity accessible and effective for organizations of all sizes, empowering them to operate securely in the digital age.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mt-1">
                  <Eye className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyber-light mb-2">Our Vision</h3>
                  <p className="text-cyber-gray">A world where every organization can confidently embrace digital transformation without compromising security or privacy.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          
        </div>
      </div>
    </section>
  );
}
