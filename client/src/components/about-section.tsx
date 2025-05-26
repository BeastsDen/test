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
          
          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-cyber-navy/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 relative overflow-hidden">
              {/* Real cybersecurity metrics dashboard */}
              <div className="mb-8">
                <img 
                  src="/dashboard-metrics.png" 
                  alt="Security Metrics Dashboard" 
                  className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <motion.div
                  className="h-20 bg-gradient-to-b from-purple-500/30 to-blue-500/30 rounded-lg"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="h-16 bg-gradient-to-b from-blue-500/30 to-purple-400/30 rounded-lg"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                  className="h-24 bg-gradient-to-b from-purple-400/30 to-purple-500/30 rounded-lg"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
              
              {/* Security Metrics */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-cyber-gray">Threat Prevention</span>
                  <span className="text-purple-500 font-semibold">99.9%</span>
                </div>
                <div className="w-full bg-cyber-darker rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "99%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-cyber-gray">Response Time</span>
                  <span className="text-blue-500 font-semibold">&lt; 1 min</span>
                </div>
                <div className="w-full bg-cyber-darker rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-cyber-gray">Client Satisfaction</span>
                  <span className="text-purple-400 font-semibold">100%</span>
                </div>
                <div className="w-full bg-cyber-darker rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
