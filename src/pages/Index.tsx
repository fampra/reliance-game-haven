import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <ThemeToggle />
      <Hero />
      <Features />
      <Pricing />
    </motion.div>
  );
};

export default Index;