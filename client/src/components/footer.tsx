import { Github, Linkedin, Twitter } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Footer() {
  const scrollToSection = useSmoothScroll();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-cyber-dark border-t border-cyber-navy/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/main logo.png" 
                alt="Hackure Logo" 
                className="h-20 w-auto filter brightness-110"
              />
            </div>
            <p className="text-cyber-gray mb-6 max-w-md">
              Protecting your digital assets with cutting-edge cybersecurity solutions. Your security is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-cyber-navy/50 rounded-lg flex items-center justify-center text-cyber-gray hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyber-navy/50 rounded-lg flex items-center justify-center text-cyber-gray hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyber-navy/50 rounded-lg flex items-center justify-center text-cyber-gray hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-cyber-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="text-cyber-gray hover:text-purple-500 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-cyber-gray hover:text-purple-500 transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-cyber-gray hover:text-purple-500 transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="text-cyber-gray hover:text-purple-500 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          
        </div>
        
        <div className="border-t border-cyber-navy/30 mt-12 pt-8 text-center">
          <p className="text-cyber-gray">
            © 2025 Hackure. All rights reserved. |{" "}
            /*
            <a href="#" className="text-purple-500 hover:text-blue-500 transition-colors duration-300">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-purple-500 hover:text-blue-500 transition-colors duration-300">
              Terms of Service
            </a>
            */
          </p>
        </div>
      </div>
    </footer>
  );
}
