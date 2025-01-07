import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your gaming needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Free Tier",
              price: "0",
              features: [
                "1GB RAM",
                "1 vCPU Core",
                "10GB SSD Storage",
                "Basic Support",
                "DDoS Protection",
              ],
              highlighted: false,
            },
            {
              name: "Pro Gamer",
              price: "9.99",
              features: [
                "4GB RAM",
                "2 vCPU Cores",
                "50GB SSD Storage",
                "24/7 Support",
                "Premium Network",
                "Automated Backups",
              ],
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "24.99",
              features: [
                "16GB RAM",
                "4 vCPU Cores",
                "100GB SSD Storage",
                "Priority Support",
                "Custom Domain",
                "API Access",
              ],
              highlighted: false,
            },
          ].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-xl ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-xl scale-105"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="ml-2 text-sm opacity-80">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-md font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-secondary"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};