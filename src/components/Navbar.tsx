import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "The Origin", href: "#hero" },
  { label: "The Method", href: "#philosophy" },
  { label: "The Selection", href: "#menu" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#" className="font-heading text-2xl font-extrabold tracking-tight text-primary-foreground">
          抹茶
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm tracking-widest uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#menu"
            className="font-heading text-sm font-bold tracking-wider uppercase px-5 py-2.5 bg-primary-foreground text-primary rounded-sm hover:opacity-90 transition-opacity"
          >
            Quick Order
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-primary-foreground"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-primary-foreground"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-primary-foreground"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-primary flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-3xl font-extrabold text-primary-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="font-heading text-lg font-bold px-8 py-3 bg-accent text-accent-foreground rounded-sm mt-4"
            >
              Quick Order
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
