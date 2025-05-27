import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send, MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  services: string[];
}

const availableServices = [
  "Internal Threat Simulation (Network VAPT)",
  "Web Application VAPT (Web VAPT)",
  "Mobile Application VAPT (Mobile VAPT)",
  "Active Directory VAPT (AD-VAPT)",
  "Cloud Security VAPT (CS-VAPT)",
  "Dark Web Breach Analysis (DWBA)",
  "External Threat Simulation (Red Teaming)",
  "Strategic Targeted Phishing Simulations (STPS)",
  "Physical Attack Simulation (PAS)",
  "Secure Source Code Review",
  "Active Threat Deception & Intrusion Detection (ATDID)",
  "Staff Training and Awareness Sessions"
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    services: [],
  });

  // Listen for service selection from other components
  useEffect(() => {
    const handleServiceSelection = (event: CustomEvent) => {
      const { serviceName } = event.detail;
      setFormData(prev => ({
        ...prev,
        services: prev.services.includes(serviceName) 
          ? prev.services 
          : [...prev.services, serviceName]
      }));

      // Scroll the selected service into view in the center
      setTimeout(() => {
        const serviceElement = document.getElementById(serviceName);
        if (serviceElement) {
          serviceElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 100);
    };

    window.addEventListener('selectService', handleServiceSelection as EventListener);
    return () => {
      window.removeEventListener('selectService', handleServiceSelection as EventListener);
    };
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
        services: [],
      });
    },
    onError: (error: any) => {
      // Handle rate limit error specifically
      if (error.message?.includes("Rate limit exceeded") || error.message?.includes("RATE_LIMIT_EXCEEDED")) {
        toast({
          title: "Too many requests",
          description: "Please wait 30 seconds before submitting another message.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Failed to send message",
          description: error.message || "An error occurred while sending your message.",
          variant: "destructive",
        });
      }
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (serviceName: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, serviceName]
        : prev.services.filter(s => s !== serviceName)
    }));
  };

  const handleSelectAllServices = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked ? [...availableServices] : []
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="mobile-compact bg-cyber-darker/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="mobile-text-compact text-cyber-gray max-w-3xl mx-auto">
            Ready to secure your digital infrastructure? Let's discuss how we can protect your organization.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-cyber-navy/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
              <CardContent className="mobile-card-compact">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyber-light">Send us a message</h3>
                <form onSubmit={handleSubmit} className="mobile-space-compact">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-cyber-gray mb-2 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-cyber-darker border-purple-500/30 text-cyber-light focus:border-purple-500 transition-colors duration-300"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-cyber-gray mb-2 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-cyber-darker border-purple-500/30 text-cyber-light focus:border-purple-500 transition-colors duration-300"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-cyber-gray mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-cyber-darker border-purple-500/30 text-cyber-light focus:border-purple-500 transition-colors duration-300"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-cyber-gray mb-2 block">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-cyber-darker border-purple-500/30 text-cyber-light focus:border-purple-500 transition-colors duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <Label className="text-cyber-gray mb-3 block">
                      Services Interested In
                    </Label>
                    <div className="space-y-3 max-h-40 overflow-y-auto bg-cyber-darker/30 p-4 rounded-lg border border-purple-500/20">
                      {/* Select All option */}
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="select-all"
                          checked={formData.services.length === availableServices.length}
                          onCheckedChange={(checked) => handleSelectAllServices(checked as boolean)}
                          className="border-purple-500/30 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                        />
                        <Label htmlFor="select-all" className="text-purple-400 font-semibold cursor-pointer">
                          Select All Services
                        </Label>
                      </div>
                      
                      <div className="border-t border-purple-500/20 pt-3">
                        {availableServices.map((service) => (
                          <div key={service} className="flex items-center space-x-3 py-1">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                              className="border-purple-500/30 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                            />
                            <Label htmlFor={service} className="text-cyber-gray hover:text-cyber-light cursor-pointer text-sm">
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {formData.services.length > 0 && (
                      <p className="text-xs text-purple-400 mt-2">
                        {formData.services.length} service{formData.services.length > 1 ? 's' : ''} selected
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-cyber-gray mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-cyber-darker border-purple-500/30 text-cyber-light focus:border-purple-500 transition-colors duration-300 resize-none"
                      placeholder="Tell us about your security needs..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-cyber-navy/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-cyber-light">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyber-light mb-1">Address</h4>
                      <p className="text-cyber-gray">123 Cyber Security Blvd<br />Digital City, DC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyber-light mb-1">Phone</h4>
                      <p className="text-cyber-gray">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyber-light mb-1">Email</h4>
                      <p className="text-cyber-gray">contact@hackure.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyber-light mb-1">Business Hours</h4>
                      <p className="text-cyber-gray">24/7 Emergency Support<br />Mon-Fri 9AM-6PM for consultations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-red-400 mb-4">
                  <AlertTriangle className="inline mr-2 h-5 w-5" />
                  Security Emergency?
                </h4>
                <p className="text-gray-300 mb-4">
                  If you're experiencing an active security incident, contact our emergency response team immediately.
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={() => window.open('tel:+917376702939')}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-300"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Helpline number: 1
                  </Button>
                  <Button 
                    onClick={() => window.open('tel:+918463894636')}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-300"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Helpline number: 2
                  </Button>
                  <p className="text-sm text-gray-400 text-center">
                    Available 24/7 • Average response time: &lt; 5 minutes
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
