import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Bug, GraduationCap, ClipboardCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Threat Detection",
    description: "Advanced AI-powered threat detection and response systems that identify and neutralize threats in real-time.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Military-grade encryption solutions to protect your sensitive data both at rest and in transit.",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Round-the-clock security monitoring with instant alerts and rapid incident response capabilities.",
  },
  {
    icon: Bug,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before malicious actors do.",
  },
  {
    icon: GraduationCap,
    title: "Security Training",
    description: "Employee security awareness training to build a human firewall against social engineering attacks.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance",
    description: "Ensure regulatory compliance with industry standards including GDPR, HIPAA, and SOX.",
  },
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
              whileHover={{ y: -8 }}
            >
              <Card className="bg-cyber-navy/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-cyber-light">{service.title}</h3>
                  <p className="text-cyber-gray mb-6 leading-relaxed">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="text-purple-500 hover:text-blue-500 hover:bg-purple-500/10 transition-colors duration-300 font-medium p-0"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
