import { motion } from "framer-motion";
import heroImage from "@/assets/hero-matcha.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex grain-overlay">
      {/* Left: Sticky content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-32 lg:sticky lg:top-0 lg:h-screen bg-primary z-10">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6"
        >
          The Verdant Ritual
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-6xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-[0.9] mb-8"
        >
          Ritual
          <br />
          in
          <br />
          <span className="text-gradient-whisk">Motion.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-base md:text-lg text-primary-foreground/70 max-w-md mb-10 leading-relaxed font-light tracking-tight"
        >
          Ceremonial-grade matcha, stone-ground in Uji, Japan. A ritual for the body and mind — not just a drink.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex gap-4"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 font-heading text-sm font-bold tracking-wider uppercase px-8 py-4 bg-accent text-accent-foreground rounded-sm hover:brightness-110 transition-all"
          >
            Quick Order
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase px-8 py-4 border border-primary-foreground/20 text-primary-foreground/80 rounded-sm hover:border-primary-foreground/50 transition-colors"
          >
            Explore
          </a>
        </motion.div>
      </div>

      {/* Right: Image */}
      <div className="hidden lg:block w-1/2 relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="sticky top-0 h-screen"
        >
          <img
            src={heroImage}
            alt="Matcha being whisked in a dark ceramic bowl"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/20" />
        </motion.div>
      </div>

      {/* Mobile background */}
      <div
        className="lg:hidden absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
};

export default Hero;
