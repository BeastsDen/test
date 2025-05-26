
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, Lock, Eye, Bug, GraduationCap, ClipboardCheck, ArrowRight, Server, AlertTriangle, FileCheck, Zap, Users, Globe, CheckCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Shield,
    title: "Threat Detection & Prevention",
    description: "Advanced AI-powered threat detection with real-time monitoring to identify and prevent security breaches before they impact your business.",
    features: ["24/7 monitoring", "AI threat analysis", "Automated response"],
    color: "from-red-500 to-orange-500",
    detailedFeatures: [
      "Real-time threat intelligence monitoring",
      "Machine learning-based anomaly detection",
      "Automated incident response workflows",
      "Custom threat hunting services",
      "Advanced persistent threat (APT) protection",
      "Zero-day exploit detection"
    ],
    benefits: [
      "Reduce security incidents by 95%",
      "Average response time under 60 seconds",
      "24/7 SOC monitoring and support",
      "Proactive threat hunting"
    ]
  },
  {
    icon: Eye,
    title: "Vulnerability Assessment",
    description: "Comprehensive security audits and penetration testing to identify vulnerabilities and strengthen your security posture.",
    features: ["Network scanning", "Penetration testing", "Risk assessment"],
    color: "from-blue-500 to-cyan-500",
    detailedFeatures: [
      "Comprehensive network vulnerability scanning",
      "Web application security testing",
      "Social engineering assessments",
      "Wireless security audits",
      "Physical security evaluations",
      "Detailed remediation roadmaps"
    ],
    benefits: [
      "Identify vulnerabilities before attackers do",
      "Comprehensive risk prioritization",
      "Detailed remediation guidance",
      "Compliance requirement validation"
    ]
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Complete infrastructure protection including cloud security, server hardening, and secure architecture design.",
    features: ["Cloud security", "Server hardening", "Architecture review"],
    color: "from-green-500 to-emerald-500",
    detailedFeatures: [
      "Multi-cloud security architecture",
      "Container and Kubernetes security",
      "Network segmentation design",
      "Identity and access management",
      "Endpoint detection and response",
      "Security configuration management"
    ],
    benefits: [
      "Reduce infrastructure vulnerabilities by 90%",
      "Enhanced cloud security posture",
      "Automated compliance monitoring",
      "Scalable security architecture"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapid incident response and forensic analysis to minimize damage and restore operations with minimal downtime.",
    features: ["Emergency response", "Forensic analysis", "Recovery planning"],
    color: "from-yellow-500 to-amber-500",
    detailedFeatures: [
      "24/7 emergency response hotline",
      "Digital forensics and investigation",
      "Malware analysis and reverse engineering",
      "Data breach response coordination",
      "Legal and regulatory compliance support",
      "Post-incident security improvements"
    ],
    benefits: [
      "Average response time under 15 minutes",
      "Minimize business disruption",
      "Preserve digital evidence",
      "Regulatory compliance assistance"
    ]
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Comprehensive cybersecurity awareness training to build a security-conscious culture within your organization.",
    features: ["Security awareness", "Phishing simulations", "Compliance training"],
    color: "from-purple-500 to-violet-500",
    detailedFeatures: [
      "Interactive security awareness training",
      "Simulated phishing campaigns",
      "Role-based security training modules",
      "Security culture assessment",
      "Executive security briefings",
      "Continuous learning programs"
    ],
    benefits: [
      "Reduce human error incidents by 80%",
      "Improve security awareness scores",
      "Build security-conscious culture",
      "Measurable behavior change"
    ]
  },
  {
    icon: FileCheck,
    title: "Compliance & Governance",
    description: "Ensure regulatory compliance with frameworks like SOC 2, ISO 27001, GDPR, and industry-specific requirements.",
    features: ["Compliance audits", "Policy development", "Risk management"],
    color: "from-indigo-500 to-blue-600",
    detailedFeatures: [
      "SOC 2 Type II audit preparation",
      "ISO 27001 implementation and certification",
      "GDPR compliance assessment",
      "HIPAA security risk assessments",
      "PCI DSS compliance validation",
      "Custom policy development"
    ],
    benefits: [
      "Achieve regulatory compliance faster",
      "Reduce audit preparation time by 60%",
      "Continuous compliance monitoring",
      "Expert guidance and support"
    ]
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-cyber-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your organization from sophisticated threats.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                {/* Interactive glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <CardContent className="p-8 relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 animate-pulse-glow`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-cyber-light group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-cyber-gray mb-6 leading-relaxed group-hover:text-cyber-light transition-colors duration-300">
                    {service.description}
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-purple-500 hover:text-blue-500 hover:bg-purple-500/10 transition-colors duration-300 font-medium p-0 group-hover:translate-x-2"
                        onClick={() => setSelectedService(service)}
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
                        {/* Left Column - Description & Features */}
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

                        {/* Right Column - Benefits */}
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
                            <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                              Schedule Consultation
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent, rgba(59, 130, 246, 0.1), transparent)",
                    backgroundSize: "400% 400%"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
