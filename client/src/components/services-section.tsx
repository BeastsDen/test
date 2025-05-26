import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Bug, GraduationCap, ClipboardCheck, ArrowRight, Server, AlertTriangle, FileCheck, Zap, Users, Globe } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Threat Detection & Prevention",
    description: "Advanced AI-powered threat detection with real-time monitoring to identify and prevent security breaches before they impact your business.",
    features: ["24/7 monitoring", "AI threat analysis", "Automated response"],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Eye,
    title: "Vulnerability Assessment",
    description: "Comprehensive security audits and penetration testing to identify vulnerabilities and strengthen your security posture.",
    features: ["Network scanning", "Penetration testing", "Risk assessment"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Complete infrastructure protection including cloud security, server hardening, and secure architecture design.",
    features: ["Cloud security", "Server hardening", "Architecture review"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapid incident response and forensic analysis to minimize damage and restore operations with minimal downtime.",
    features: ["Emergency response", "Forensic analysis", "Recovery planning"],
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Comprehensive cybersecurity awareness training to build a security-conscious culture within your organization.",
    features: ["Security awareness", "Phishing simulations", "Compliance training"],
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: FileCheck,
    title: "Compliance & Governance",
    description: "Ensure regulatory compliance with frameworks like SOC 2, ISO 27001, GDPR, and industry-specific requirements.",
    features: ["Compliance audits", "Policy development", "Risk management"],
    color: "from-indigo-500 to-blue-600"
  }
];

export default function ServicesSection() {
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
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 animate-pulse-glow`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-cyber-light group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-cyber-gray mb-6 leading-relaxed group-hover:text-cyber-light transition-colors duration-300">
                    {service.description}
                  </p>

                  <motion.div whileHover={{ x: 5 }}>
                    <Button
                      variant="ghost"
                      className="text-purple-500 hover:text-blue-500 hover:bg-purple-500/10 transition-colors duration-300 font-medium p-0 group-hover:translate-x-2"
                    >
                      Learn More 
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
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