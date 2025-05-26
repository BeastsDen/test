import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, Lock, Eye, Bug, GraduationCap, ClipboardCheck, ArrowRight, Server, AlertTriangle, FileCheck, Zap, Users, Globe, CheckCircle, Network, Smartphone, Cloud, Search, Target, Code, UserCheck } from "lucide-react";
import { useState } from "react";

// Function to scroll to a specific section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Function to pass selected service to contact form
const selectServiceInContact = (serviceName: string) => {
  // Dispatch custom event with service data
  window.dispatchEvent(new CustomEvent('selectService', { detail: { serviceName } }));
};

const vaptServices = [
  {
    icon: Network,
    title: "Internal Threat Simulation (Network VAPT)",
    description: "Evaluating internal security postures by testing network configurations, vulnerabilities and other security weaknesses.",
    features: ["Network scanning", "Vulnerability assessment", "Lateral movement testing"],
    color: "from-red-500 to-orange-500",
    detailedFeatures: [
      "Comprehensive network infrastructure assessment",
      "Internal vulnerability scanning and exploitation",
      "Lateral movement technique identification",
      "Network segmentation evaluation",
      "Privilege escalation testing",
      "Network device security analysis"
    ],
    benefits: [
      "Identify critical network vulnerabilities before attackers do",
      "Understand attack paths within your network",
      "Improve network segmentation and access controls",
      "Strengthen internal security posture"
    ]
  },
  {
    icon: Globe,
    title: "Web Application VAPT (Web VAPT)",
    description: "Identifying and exploiting vulnerabilities in Web Applications and securing APIs and web services from exploitation.",
    features: ["OWASP Top 10 testing", "API security", "Authentication bypass"],
    color: "from-blue-500 to-cyan-500",
    detailedFeatures: [
      "OWASP Top 10 vulnerability assessment",
      "SQL injection and XSS testing",
      "Authentication and authorization bypass",
      "API security testing and validation",
      "Session management evaluation",
      "Input validation and sanitization testing"
    ],
    benefits: [
      "Secure web applications before deployment",
      "Protect sensitive data from web-based attacks",
      "Ensure API security and integrity",
      "Maintain customer trust and compliance"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Application VAPT (Mobile VAPT)",
    description: "Identifying and exploiting vulnerabilities in iOS and Android applications, reviewing app permissions, API security, and encryption mechanisms.",
    features: ["iOS/Android testing", "API security", "Encryption analysis"],
    color: "from-green-500 to-emerald-500",
    detailedFeatures: [
      "Static and dynamic mobile app analysis",
      "iOS and Android security testing",
      "App permission and privilege analysis",
      "Mobile API security assessment",
      "Data encryption and storage review",
      "Mobile device management (MDM) testing"
    ],
    benefits: [
      "Secure mobile applications across platforms",
      "Protect user data and privacy",
      "Ensure compliance with mobile security standards",
      "Prevent mobile-based data breaches"
    ]
  },
  {
    icon: Server,
    title: "Active Directory VAPT (AD-VAPT)",
    description: "Identifying weaknesses in Active Directory configurations and exploiting vulnerabilities to assess organizational control risks.",
    features: ["AD enumeration", "Privilege escalation", "Kerberoasting"],
    color: "from-purple-500 to-violet-500",
    detailedFeatures: [
      "Active Directory enumeration and reconnaissance",
      "Privilege escalation path identification",
      "Kerberoasting and ASREPRoasting attacks",
      "Group Policy security assessment",
      "Domain controller security evaluation",
      "Trust relationship analysis"
    ],
    benefits: [
      "Secure critical identity infrastructure",
      "Prevent domain-wide compromises",
      "Strengthen access control mechanisms",
      "Protect against advanced persistent threats"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Security VAPT (CS-VAPT)",
    description: "Identifying misconfigurations and security weaknesses in cloud deployments while ensuring compliance with industry standards.",
    features: ["Cloud configuration", "Compliance testing", "Multi-cloud security"],
    color: "from-indigo-500 to-blue-600",
    detailedFeatures: [
      "AWS, Azure, GCP security assessment",
      "Cloud configuration and IAM review",
      "Container and Kubernetes security testing",
      "Serverless security evaluation",
      "Cloud storage and database security",
      "Compliance validation (ISO 27001, PCI-DSS, NIST)"
    ],
    benefits: [
      "Secure cloud infrastructure and services",
      "Ensure regulatory compliance",
      "Optimize cloud security configurations",
      "Prevent cloud-based data breaches"
    ]
  }
];

const specialServices = [
  {
    icon: Search,
    title: "Dark Web Breach Analysis (DWBA)",
    description: "Monitoring the dark web and underground forums for leaked credentials and corporate data with proactive alerting and mitigation strategies.",
    features: ["Dark web monitoring", "Credential tracking", "Breach analysis"],
    color: "from-yellow-500 to-amber-500",
    detailedFeatures: [
      "Continuous dark web monitoring",
      "Leaked credential identification",
      "Corporate data breach detection",
      "Underground forum surveillance",
      "Real-time threat intelligence feeds",
      "Proactive breach notification system"
    ],
    benefits: [
      "Early detection of data breaches",
      "Prevent identity theft and fraud",
      "Proactive threat intelligence",
      "Rapid incident response capabilities"
    ]
  },
  {
    icon: Target,
    title: "External Threat Simulation (Red Teaming)",
    description: "Simulating real-world cyberattacks by mimicking advanced persistent threats (APTs) and testing external defenses.",
    features: ["APT simulation", "External reconnaissance", "Multi-vector attacks"],
    color: "from-red-600 to-pink-600",
    detailedFeatures: [
      "Advanced persistent threat simulation",
      "External reconnaissance and OSINT",
      "Multi-vector attack campaigns",
      "Social engineering integration",
      "Stealth operation techniques",
      "Real-world attack scenario testing"
    ],
    benefits: [
      "Test defenses against sophisticated attacks",
      "Identify security gaps before real attackers",
      "Improve incident response capabilities",
      "Validate security investments"
    ]
  },
  {
    icon: Bug,
    title: "Strategic Targeted Phishing Simulations (STPS)",
    description: "Conducting real-world phishing campaigns to test employee awareness and providing training sessions to mitigate social engineering risks.",
    features: ["Phishing campaigns", "Employee testing", "Awareness training"],
    color: "from-orange-500 to-red-500",
    detailedFeatures: [
      "Customized phishing campaign design",
      "Employee susceptibility testing",
      "Spear phishing simulations",
      "Social engineering awareness training",
      "Behavioral change measurement",
      "Continuous improvement programs"
    ],
    benefits: [
      "Reduce human error incidents by 80%",
      "Build security-conscious culture",
      "Measure and improve security awareness",
      "Prevent social engineering attacks"
    ]
  },
  {
    icon: Lock,
    title: "Physical Attack Simulation (PAS)",
    description: "Testing physical security measures including access control, RFID card cloning, and tailgating prevention assessments.",
    features: ["Physical penetration", "Access control testing", "RFID analysis"],
    color: "from-gray-500 to-slate-600",
    detailedFeatures: [
      "Physical facility penetration testing",
      "Access control system evaluation",
      "RFID card cloning and badge duplication",
      "Tailgating and social engineering tests",
      "USB drop attack simulations",
      "Security camera and alarm system testing"
    ],
    benefits: [
      "Secure physical access points",
      "Prevent unauthorized facility access",
      "Protect against physical data theft",
      "Comprehensive security posture assessment"
    ]
  },
  {
    icon: Code,
    title: "Secure Source Code Review",
    description: "Conducting manual and automated security code analysis to identify vulnerabilities in applications before deployment.",
    features: ["Static analysis", "Manual review", "Vulnerability detection"],
    color: "from-teal-500 to-cyan-600",
    detailedFeatures: [
      "Static application security testing (SAST)",
      "Manual code review and analysis",
      "Vulnerability pattern identification",
      "Secure coding standards validation",
      "Third-party library security assessment",
      "Development lifecycle integration"
    ],
    benefits: [
      "Identify vulnerabilities before deployment",
      "Improve code quality and security",
      "Reduce post-deployment security issues",
      "Accelerate secure development practices"
    ]
  },
  {
    icon: Shield,
    title: "Active Threat Deception & Intrusion Detection (ATDID)",
    description: "Deploying honeypots, canary tokens, and deception technology with SIEM integration for continuous attack monitoring.",
    features: ["Honeypot deployment", "Deception technology", "SIEM integration"],
    color: "from-emerald-500 to-green-600",
    detailedFeatures: [
      "Honeypot and honeynet deployment",
      "Canary token implementation",
      "Deception technology integration",
      "SIEM platform integration and tuning",
      "Real-time threat detection and alerting",
      "Attack attribution and analysis"
    ],
    benefits: [
      "Early attack detection and containment",
      "Reduce dwell time of attackers",
      "Gather threat intelligence",
      "Enhance security monitoring capabilities"
    ]
  }
];

const trainingServices = [
  {
    icon: GraduationCap,
    title: "Staff Training and Awareness Sessions",
    description: "Conducting interactive cybersecurity workshops for employees, educating staff on best practices, phishing awareness, and insider threat prevention.",
    features: ["Interactive workshops", "Security awareness", "Best practices training"],
    color: "from-violet-500 to-purple-600",
    detailedFeatures: [
      "Interactive cybersecurity workshops",
      "Role-based security training modules",
      "Phishing awareness and prevention",
      "Insider threat identification and mitigation",
      "Incident reporting procedures",
      "Security policy and compliance training"
    ],
    benefits: [
      "Build security-conscious workforce",
      "Reduce human error incidents",
      "Improve security policy compliance",
      "Create culture of security awareness"
    ]
  }
];

const ServiceCarousel = ({ title, subtitle, services, gradient }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mobile-margin-compact"
    >
      <div className="text-center mb-6 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
          <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {title}
          </span>
        </h3>
        <p className="text-sm sm:text-lg text-cyber-gray max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden">
        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={service.title} className="w-full flex-shrink-0 px-4">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-500 w-6' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Service Counter */}
        <div className="text-center mt-2">
          <span className="text-xs text-cyber-gray">
            {currentIndex + 1} of {services.length}
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-4 px-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
            disabled={currentIndex === 0}
          >
            <ArrowRight className="h-4 w-4 text-purple-400 rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
            disabled={currentIndex === services.length - 1}
          >
            <ArrowRight className="h-4 w-4 text-purple-400" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [openDialogs, setOpenDialogs] = useState({});

  const handleScheduleConsultation = (serviceName: string) => {
    // Close the dialog
    setOpenDialogs(prev => ({ ...prev, [serviceName]: false }));
    // Select the service in contact form
    selectServiceInContact(serviceName);
    // Scroll to contact section
    setTimeout(() => {
      scrollToSection('contact');
    }, 100);
  };

  const ServiceCard = ({ service, index }) => (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="interactive-hover"
    >
      <Card className="bg-cyber-navy/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group h-full relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        <CardContent className="p-3 sm:p-6 relative z-10">
          <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-2 sm:mb-4 animate-pulse-glow`}>
            <service.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
          </div>

          <h3 className="text-sm sm:text-lg font-bold mb-2 sm:mb-3 text-cyber-light group-hover:text-purple-300 transition-colors duration-300 leading-tight">
            {service.title}
          </h3>

          <p className="text-cyber-gray mb-4 text-sm leading-relaxed group-hover:text-cyber-light transition-colors duration-300 hidden sm:block">
            {service.description}
          </p>

          <Dialog 
            open={openDialogs[service.title] || false}
            onOpenChange={(open) => {
              setOpenDialogs(prev => ({ ...prev, [service.title]: open }));
              if (open) setSelectedService(service);
            }}
          >
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="text-purple-500 hover:text-blue-500 hover:bg-purple-500/10 transition-colors duration-300 font-medium p-0 group-hover:translate-x-2"
              >
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-cyber-navy/95 backdrop-blur-lg border border-purple-500/30">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-4 text-2xl text-cyber-light">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  {service.title}
                </DialogTitle>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Service Overview</h4>
                    <p className="text-cyber-gray leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.detailedFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-cyber-gray">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-cyber-light font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20">
                    <h4 className="text-lg font-semibold text-cyber-light mb-3">Ready to Get Started?</h4>
                    <p className="text-cyber-gray mb-4">
                      Contact our security experts to discuss how this service can protect your organization.
                    </p>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                      onClick={() => handleScheduleConsultation(service.title)}
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="services" className="mobile-compact bg-cyber-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="mobile-text-compact text-cyber-gray max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your organization from sophisticated threats.
          </p>
        </motion.div>

        {/* VAPT Services Section */}
        <ServiceCarousel 
          title="Vulnerability Assessment & Penetration Testing Services"
          subtitle="Comprehensive security testing to identify and exploit vulnerabilities across your entire infrastructure."
          services={vaptServices}
          gradient="from-red-500 to-orange-500"
        />

        {/* Special Services Section */}
        <ServiceCarousel 
          title="Special Services"
          subtitle="Advanced cybersecurity services including threat simulation, monitoring, and specialized security assessments."
          services={specialServices}
          gradient="from-yellow-500 to-red-500"
        />

        {/* Training Services Section */}
        <ServiceCarousel 
          title="Training Services"
          subtitle="Comprehensive cybersecurity training programs to build a security-conscious workforce."
          services={trainingServices}
          gradient="from-violet-500 to-purple-500"
        />
      </div>
    </section>
  );
}