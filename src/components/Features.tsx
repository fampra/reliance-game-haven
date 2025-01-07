import { motion } from "framer-motion";
import { Database, Cloud, Cpu } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
            Premium Features, <span className="text-primary">Zero Cost</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to run your game server, included in every plan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Database,
              title: "Automated Backups",
              description:
                "Daily backups with one-click restore functionality",
            },
            {
              icon: Cloud,
              title: "Global Network",
              description:
                "Multiple locations worldwide for optimal latency",
            },
            {
              icon: Cpu,
              title: "Resource Management",
              description:
                "Easy scaling of CPU, RAM, and storage resources",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};