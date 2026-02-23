import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import drinkClassic from "@/assets/drink-classic.jpg";
import drinkIced from "@/assets/drink-iced.jpg";
import drinkCeremonial from "@/assets/drink-ceremonial.jpg";
import drinkTonic from "@/assets/drink-tonic.jpg";

const drinks = [
  {
    name: "Classic Latte",
    price: "$6.50",
    profile: { umami: 70, sweetness: 40, body: 80, finish: 60 },
    image: drinkClassic,
  },
  {
    name: "Iced Oat Matcha",
    price: "$7.00",
    profile: { umami: 50, sweetness: 60, body: 70, finish: 50 },
    image: drinkIced,
  },
  {
    name: "Ceremonial Pure",
    price: "$8.50",
    profile: { umami: 95, sweetness: 20, body: 90, finish: 85 },
    image: drinkCeremonial,
  },
  {
    name: "Matcha Tonic",
    price: "$7.50",
    profile: { umami: 40, sweetness: 30, body: 50, finish: 70 },
    image: drinkTonic,
  },
];

const ProfileBar = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-3">
    <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 w-16">
      {label}
    </span>
    <div className="flex-1 h-[2px] bg-primary-foreground/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-full bg-accent rounded-full"
      />
    </div>
  </div>
);

const DrinkCard = ({ drink, index }: { drink: typeof drinks[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-[300px] md:w-[340px] group"
    >
      <div className="relative overflow-hidden rounded-sm bg-primary mb-4 aspect-[2/3]">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />

        {/* Flavor profile overlay on hover */}
        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-accent mb-3">
            Flavor Profile
          </p>
          <div className="space-y-2">
            {Object.entries(drink.profile).map(([key, value]) => (
              <ProfileBar key={key} label={key} value={value} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">
            {drink.name}
          </h3>
        </div>
        <span className="font-body text-sm text-muted-foreground">
          {drink.price}
        </span>
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgHue = useTransform(scrollYProgress, [0, 1], [163, 120]);
  const bgLightness = useTransform(scrollYProgress, [0, 1], [17, 75]);

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-24 md:py-32 px-6 md:px-12 bg-background grain-overlay relative overflow-hidden"
    >
      {/* Subtle background color transition */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: useTransform(
            [bgHue, bgLightness],
            ([h, l]) => `hsl(${h}, 30%, ${l}%)`
          ),
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Current Selection
          </p>
          <h2 className="font-heading text-5xl md:text-7xl font-extrabold text-foreground leading-[0.95]">
            The
            <br />
            Selection.
          </h2>
        </motion.div>

        {/* Horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {drinks.map((drink, i) => (
            <DrinkCard key={drink.name} drink={drink} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="font-heading text-sm font-bold tracking-wider uppercase px-10 py-4 bg-accent text-accent-foreground rounded-sm hover:brightness-110 transition-all"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
