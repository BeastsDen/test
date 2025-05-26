import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Play } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function HeroSection() {
  const scrollToSection = useSmoothScroll();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-navy"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-blue-500/10"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-60"
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full opacity-40"
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-30"
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo Integration */}
          <motion.div 
            className="mb-8 flex justify-center"
            animate={{ 
              boxShadow: [
                "0 0 5px rgb(139, 92, 246), 0 0 10px rgb(139, 92, 246), 0 0 15px rgb(139, 92, 246)",
                "0 0 10px rgb(59, 130, 246), 0 0 20px rgb(59, 130, 246), 0 0 30px rgb(59, 130, 246)",
                "0 0 5px rgb(139, 92, 246), 0 0 10px rgb(139, 92, 246), 0 0 15px rgb(139, 92, 246)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center font-bold text-2xl text-white">
              H
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Secure Your
            </span>
            <br />
            <span className="text-cyber-light">Digital Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cyber-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced cybersecurity solutions that protect your business from evolving threats while empowering digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Shield className="mr-2 h-5 w-5" />
              Start Protection
            </Button>
            <Button
              variant="outline"
              className="border-2 border-purple-500/50 text-purple-500 bg-transparent hover:bg-purple-500/10 hover:border-purple-500 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">99.9%</div>
              <div className="text-cyber-gray">Threat Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-cyber-gray">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-cyber-gray">Protected Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
