
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
              <AnimatePresence mode="wait">
                {!isScrolled ? (
                  // Full logo when at top - vertical layout
                  <motion.div
                    key="full-logo"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                  >
                    {/* Circular Logo */}
                    <motion.div
                      className="w-16 h-16 mb-3"
                      exit={{ x: -50, y: 10, scale: 0.5 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Outer ring */}
                        <circle cx="100" cy="100" r="90" fill="none" stroke="url(#gradient1)" strokeWidth="8" strokeDasharray="20 10" strokeLinecap="round"/>
                        {/* Middle ring */}
                        <circle cx="100" cy="100" r="70" fill="none" stroke="url(#gradient2)" strokeWidth="6" strokeDasharray="15 8" strokeLinecap="round"/>
                        {/* Inner ring */}
                        <circle cx="100" cy="100" r="50" fill="none" stroke="url(#gradient3)" strokeWidth="4" strokeDasharray="10 6" strokeLinecap="round"/>
                        {/* Center circle */}
                        <circle cx="100" cy="100" r="30" fill="url(#centerGradient)"/>
                        
                        {/* Gradients */}
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="50%" stopColor="#A855F7" />
                            <stop offset="100%" stopColor="#7C3AED" />
                          </linearGradient>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="100%" stopColor="#9333EA" />
                          </linearGradient>
                          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#C084FC" />
                            <stop offset="100%" stopColor="#A855F7" />
                          </linearGradient>
                          <radialGradient id="centerGradient">
                            <stop offset="0%" stopColor="#F3E8FF" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </motion.div>
                    
                    {/* Company Name */}
                    <motion.div
                      className="text-white font-bold text-xl tracking-wider mb-1"
                      exit={{ y: -20, x: 30, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      HACKURE
                    </motion.div>
                    
                    {/* Slogan */}
                    <motion.div
                      className="text-purple-300 text-xs tracking-widest text-center px-2"
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      OFFENSE FUELS OUR DEFENSE
                    </motion.div>
                  </motion.div>
                ) : (
                  // Compact logo when scrolled - horizontal layout
                  <motion.div
                    key="compact-logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex items-center space-x-3"
                  >
                    {/* Compact Circular Logo */}
                    <motion.div
                      className="w-10 h-10"
                      initial={{ x: 50, y: -10, scale: 1.6 }}
                      animate={{ x: 0, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Simplified version for compact state */}
                        <circle cx="100" cy="100" r="85" fill="none" stroke="url(#compactGradient1)" strokeWidth="10" strokeDasharray="25 15" strokeLinecap="round"/>
                        <circle cx="100" cy="100" r="60" fill="none" stroke="url(#compactGradient2)" strokeWidth="8" strokeDasharray="20 10" strokeLinecap="round"/>
                        <circle cx="100" cy="100" r="35" fill="url(#compactCenterGradient)"/>
                        
                        <defs>
                          <linearGradient id="compactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#7C3AED" />
                          </linearGradient>
                          <linearGradient id="compactGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="100%" stopColor="#9333EA" />
                          </linearGradient>
                          <radialGradient id="compactCenterGradient">
                            <stop offset="0%" stopColor="#F3E8FF" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </motion.div>
                    
                    {/* Company Name */}
                    <motion.div
                      className="text-white font-bold text-lg tracking-wide"
                      initial={{ x: -30, y: 20, opacity: 0 }}
                      animate={{ x: 0, y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                    >
                      HACKURE
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
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
