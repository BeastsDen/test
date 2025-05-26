
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Clock, Users, AlertTriangle, CheckCircle } from "lucide-react";

const metrics = [
  {
    title: "Threat Prevention",
    value: "99.9%",
    icon: Shield,
    color: "from-green-500 to-green-600",
    description: "Threats blocked this month"
  },
  {
    title: "Response Time",
    value: "< 1 min",
    icon: Clock,
    color: "from-blue-500 to-blue-600",
    description: "Average incident response"
  },
  {
    title: "Client Satisfaction",
    value: "100%",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    description: "Customer satisfaction rate"
  },
  {
    title: "Security Score",
    value: "98/100",
    icon: CheckCircle,
    color: "from-cyan-500 to-cyan-600",
    description: "Overall security rating"
  }
];

const recentAlerts = [
  {
    type: "blocked",
    title: "Malware Attempt Blocked",
    time: "2 minutes ago",
    severity: "high"
  },
  {
    type: "resolved",
    title: "DDoS Attack Mitigated",
    time: "15 minutes ago",
    severity: "critical"
  },
  {
    type: "monitoring",
    title: "Unusual Traffic Pattern",
    time: "1 hour ago",
    severity: "medium"
  }
];

export default function SecurityMetrics() {
  return (
    <section className="py-20 bg-cyber-darker/30">
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
              Real-Time Security Dashboard
            </span>
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto">
            Monitor your security posture with our comprehensive real-time analytics and threat intelligence.
          </p>
        </motion.div>

        {/* Main Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-cyber-navy/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/dashboard-metrics.png" 
                alt="Security Dashboard" 
                className="w-full h-auto rounded-2xl"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-cyber-navy/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyber-light mb-2">{metric.value}</h3>
                  <p className="text-cyber-gray text-sm mb-1">{metric.title}</p>
                  <p className="text-xs text-cyber-gray/70">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Security Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-cyber-navy/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-cyber-light mb-6 flex items-center">
                <AlertTriangle className="mr-3 h-6 w-6 text-orange-500" />
                Recent Security Events
              </h3>
              <div className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-cyber-darker/50 rounded-lg border border-cyber-navy/30">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        alert.severity === 'critical' ? 'bg-red-500' :
                        alert.severity === 'high' ? 'bg-orange-500' :
                        'bg-yellow-500'
                      }`} />
                      <div>
                        <p className="text-cyber-light font-medium">{alert.title}</p>
                        <p className="text-cyber-gray text-sm">{alert.time}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      alert.type === 'blocked' ? 'bg-green-500/20 text-green-400' :
                      alert.type === 'resolved' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
