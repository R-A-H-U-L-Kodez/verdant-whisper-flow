import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bentoSourcing from "@/assets/bento-sourcing.jpg";
import bentoPurity from "@/assets/bento-purity.jpg";
import bentoEnergy from "@/assets/bento-energy.jpg";

const pillars = [
  {
    title: "Sourcing",
    subtitle: "Uji, Kyoto Prefecture",
    description: "Single-origin tencha leaves, shade-grown for 21 days to maximize chlorophyll and L-Theanine content.",
    image: bentoSourcing,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Purity",
    subtitle: "Zero Additives",
    description: "Stone-ground. Nothing else. No sugar, no fillers, no compromise.",
    image: bentoPurity,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Energy",
    subtitle: "L-Theanine × Caffeine",
    description: "Calm alertness that lasts 4-6 hours. No crash, no jitters — just sustained focus.",
    image: bentoEnergy,
    span: "md:col-span-1 md:row-span-1",
  },
];

const BentoCard = ({ pillar, index }: { pillar: typeof pillars[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`${pillar.span} relative group overflow-hidden rounded-sm bg-primary cursor-pointer`}
    >
      <img
        src={pillar.image}
        alt={pillar.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 min-h-[280px] md:min-h-[320px]">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-2">
          {pillar.subtitle}
        </p>
        <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3">
          {pillar.title}
        </h3>
        <p className="font-body text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
};

const Philosophy = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 md:px-12 bg-background grain-overlay">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Method
          </p>
          <h2 className="font-heading text-5xl md:text-7xl font-extrabold text-foreground leading-[0.95]">
            Beyond
            <br />
            the Cup.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {pillars.map((pillar, i) => (
            <BentoCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
