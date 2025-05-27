
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
              style={{ 
                height: isScrolled ? '64px' : '120px',
                width: isScrolled ? 'auto' : '200px',
                paddingTop: isScrolled ? '0px' : '20px'
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Full logo state - vertical layout */}
              <AnimatePresence>
                {!isScrolled && (
                  <motion.div
                    className="flex flex-col items-center absolute inset-0 justify-center"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0 
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8, 
                      y: -20,
                      transition: { duration: 0.3 }
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {/* Circular Logo */}
                    <motion.img
                      src="/trans logo_1748282037813.png"
                      alt="Hackure Logo"
                      className="w-16 h-16 mb-2 object-contain"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    
                    {/* Company Name */}
                    <motion.img
                      src="/trans comp_1748282026776.png"
                      alt="Hackure Company"
                      className="h-6 mb-1 object-contain"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                    
                    {/* Slogan */}
                    <motion.img
                      src="/trans slogan_1748282043833.png"
                      alt="Offense Fuels Our Defense"
                      className="h-4 object-contain"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Compact logo state - horizontal layout */}
              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    className="flex items-center space-x-3 absolute inset-0 justify-start pl-2"
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      x: 0 
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8, 
                      x: 20,
                      transition: { duration: 0.3 }
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.1
                    }}
                  >
                    {/* Compact Circular Logo */}
                    <motion.img
                      src="/trans logo_1748282037813.png"
                      alt="Hackure Logo"
                      className="w-10 h-10 object-contain"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    
                    {/* Company Name */}
                    <motion.img
                      src="/trans comp_1748282026776.png"
                      alt="Hackure Company"
                      className="h-5 object-contain"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
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
