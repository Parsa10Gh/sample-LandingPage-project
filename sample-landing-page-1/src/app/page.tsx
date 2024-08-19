import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <div className="text-center bg-[url('/hero_BG.png')] bg-cover bg-right">
        <Navbar />
        <Hero />
      </div>
      <Services />
    </>
  );
}
