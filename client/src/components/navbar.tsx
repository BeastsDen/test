
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-transparent backdrop-blur-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div 
              className="flex items-center cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick("home")}
            >
              {!isScrolled ? (
                // Full logo when at top
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  {/* Logo Symbol */}
                  <motion.div
                    className="relative w-12 h-12 mb-2"
                    exit={{ x: -40, y: 10, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {/* Circular pattern background */}
                    <div className="absolute inset-0 rounded-full border-2 border-purple-500/30">
                      <div className="absolute inset-1 rounded-full border border-purple-500/50">
                        <div className="absolute inset-1 rounded-full border border-purple-500/70">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">H</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Animated circuit lines */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-purple-500 rounded-full"
                          style={{
                            top: `${Math.sin((i * Math.PI) / 4) * 20 + 50}%`,
                            left: `${Math.cos((i * Math.PI) / 4) * 20 + 50}%`,
                          }}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Company Name */}
                  <motion.div
                    className="text-white font-bold text-lg tracking-wider"
                    exit={{ y: -30, x: 20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    HACKURE
                  </motion.div>
                  
                  {/* Slogan */}
                  <motion.div
                    className="text-purple-400 text-xs tracking-widest mt-1"
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    OFFENSE FUELS OUR DEFENSE
                  </motion.div>
                </motion.div>
              ) : (
                // Compact logo when scrolled
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex items-center space-x-3"
                >
                  {/* Compact Logo Symbol */}
                  <motion.div
                    className="relative w-8 h-8"
                    initial={{ x: 40, y: -10, scale: 1.2 }}
                    animate={{ x: 0, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 rounded-full border border-purple-500/50">
                      <div className="absolute inset-0.5 rounded-full border border-purple-500/70">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">H</span>
                        </div>
                      </div>
                    </div>
                    {/* Minimal circuit effect */}
                    <div className="absolute inset-0">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-0.5 h-0.5 bg-purple-500 rounded-full"
                          style={{
                            top: `${Math.sin((i * Math.PI) / 2) * 12 + 50}%`,
                            left: `${Math.cos((i * Math.PI) / 2) * 12 + 50}%`,
                          }}
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Compact Company Name */}
                  <motion.div
                    className="text-white font-bold text-base tracking-wide"
                    initial={{ x: -20, y: 30 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                  >
                    HACKURE
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-cyber-gray hover:text-purple-500 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contact")}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-cyber-gray hover:text-purple-500"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-cyber-darker/95 backdrop-blur-md border-l border-cyber-navy/30"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-cyber-gray hover:text-purple-500 transition-colors duration-300 text-lg"
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  onClick={() => handleNavClick("contact")}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
