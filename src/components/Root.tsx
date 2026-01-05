import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Cottages from "@/components/Cottages";
import Gallery from "./Gallery";

export default function Root() {
  return (
    <main className="bg-slate-50 min-h-screen font-poppins">
      <Navbar />
      <Hero />
      <Destinations />
      <Cottages />
      <Gallery />
    </main>
  );
}
