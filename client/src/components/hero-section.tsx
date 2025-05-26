import { Shield, Lock, Eye, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function HeroSection() {
  const scrollToSection = useSmoothScroll();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background with Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-navy"></div>
      <div className="absolute inset-0 cyber-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-blue-500/10"></div>

      {/* Matrix-style falling elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 200 + 100}px`,
            }}
            animate={{
              y: [-200, window.innerHeight + 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Interactive Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full opacity-60 cursor-pointer animate-pulse-glow"
        animate={{ y: [-20, 0, -20], rotate: [0, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.5, opacity: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full opacity-40 cursor-pointer animate-pulse-glow"
        animate={{ y: [-20, 0, -20], rotate: [360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-purple-400 rounded-full opacity-30 cursor-pointer animate-pulse-glow"
        animate={{ y: [-20, 0, -20], rotate: [0, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
      />

      {/* Interactive Cyber Nodes */}
      <motion.div
        className="absolute top-1/2 left-1/6 w-2 h-2 bg-cyan-400 rounded-full opacity-50 cursor-pointer"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        whileHover={{ scale: 2, opacity: 1 }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-50 cursor-pointer"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        whileHover={{ scale: 2, opacity: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >


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
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="border-2 border-purple-500/50 text-purple-500 bg-transparent hover:bg-purple-500/10 hover:border-purple-500 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Services We Offer
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

      {/* Floating Cybersecurity Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-purple-500/30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield className="h-8 w-8" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-blue-500/30"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Lock className="h-6 w-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-purple-400/30"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Eye className="h-7 w-7" />
        </motion.div>
        <motion.div
          className="absolute top-60 right-10 text-blue-400/30"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Zap className="h-5 w-5" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-50 cursor-pointer"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          whileHover={{ scale: 2, opacity: 1 }}
        />
      </div>
    </section>
  );
}