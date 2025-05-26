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
          
          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated Graphics */}
            <div className="relative">
              {/* Main Visual Card */}
              <Card className="bg-cyber-navy/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-500 rounded-full"
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${20 + (i * 10)}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Security Shield Visualization */}
                <div className="mb-8 flex justify-center">
                  <motion.div
                    className="relative w-32 h-32"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50"></div>
                    <motion.div
                      className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-400/20 border border-blue-500/50"
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-400/30 to-purple-500/30 flex items-center justify-center">
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-white font-bold text-sm">🛡️</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Animated Stats */}
                <div className="space-y-6">
                  <motion.div
                    className="flex justify-between items-center p-4 bg-cyber-darker/50 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-cyber-gray">Years of Experience</span>
                    <motion.span
                      className="text-2xl font-bold text-purple-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      15+
                    </motion.span>
                  </motion.div>

                  <motion.div
                    className="flex justify-between items-center p-4 bg-cyber-darker/50 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-cyber-gray">Security Experts</span>
                    <motion.span
                      className="text-2xl font-bold text-blue-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    >
                      50+
                    </motion.span>
                  </motion.div>

                  <motion.div
                    className="flex justify-between items-center p-4 bg-cyber-darker/50 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-cyber-gray">Global Reach</span>
                    <motion.span
                      className="text-2xl font-bold text-purple-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      40+ Countries
                    </motion.span>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="w-3 h-3 bg-purple-500 rounded-full"
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div className="absolute bottom-4 left-4">
                  <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{
                      y: [10, -10, 10],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </Card>

              {/* Additional floating cards */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-blue-500/30"
                animate={{
                  y: [5, -5, 5],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
