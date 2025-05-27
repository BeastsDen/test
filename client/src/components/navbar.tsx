
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
      setIsScrolled(window.scrollY > 30);
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
        <div className={`flex justify-between items-center transition-all duration-700 ease-out ${isScrolled ? 'h-16' : 'h-24'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick("home")}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-center"
                animate={{ 
                  flexDirection: isScrolled ? "row" : "column",
                  alignItems: isScrolled ? "center" : "center",
                  gap: isScrolled ? "12px" : "4px"
                }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.25, 0.1, 0.25, 1],
                  type: "tween"
                }}
              >
                {/* Circular Logo */}
                <motion.img
                  src="/trans logo_1748282037813.png"
                  alt="Hackure Logo"
                  className="object-contain"
                  animate={{ 
                    width: isScrolled ? "36px" : "52px",
                    height: isScrolled ? "36px" : "52px"
                  }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween"
                  }}
                />
                
                {/* Company Name */}
                <motion.img
                  src="/trans comp_1748282026776.png"
                  alt="Hackure Company"
                  className="object-contain"
                  animate={{ 
                    height: isScrolled ? "18px" : "18px",
                    marginBottom: isScrolled ? "0px" : "6px"
                  }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween"
                  }}
                />
                
                {/* Slogan - only show when not scrolled */}
                <motion.img
                  src="/trans slogan_1748282043833.png"
                  alt="Offense Fuels Our Defense"
                  className="object-contain"
                  animate={{ 
                    opacity: isScrolled ? 0 : 1,
                    height: isScrolled ? "0px" : "14px",
                    scale: isScrolled ? 0.9 : 1,
                    marginTop: isScrolled ? "0px" : "2px"
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween"
                  }}
                  style={{ 
                    overflow: "hidden",
                    display: isScrolled ? "none" : "block" 
                  }}
                />
              </motion.div>
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
