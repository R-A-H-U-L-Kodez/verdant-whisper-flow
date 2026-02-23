import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Philosophy />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default Index;
