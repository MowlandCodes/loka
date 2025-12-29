import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Root() {
  return (
    <main className="bg-slate-50 min-h-screen font-poppins">
      <Navbar />
      <Hero />
    </main>
  );
}
