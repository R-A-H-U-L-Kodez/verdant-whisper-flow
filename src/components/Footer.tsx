const Footer = () => {
  return (
    <footer className="bg-primary py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-heading text-4xl font-extrabold text-primary-foreground mb-4">
              抹茶
            </h3>
            <p className="font-body text-sm text-primary-foreground/50 max-w-sm leading-relaxed">
              Ceremonial-grade matcha, sourced directly from Uji, Japan. Elevating your daily ritual since 2024.
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {["The Origin", "The Method", "The Selection", "The Goods", "Journal"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {["Instagram", "TikTok", "Newsletter", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/30">
            © 2024 Matcha. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/30">
            Stone-ground in Uji, Kyoto Prefecture
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
