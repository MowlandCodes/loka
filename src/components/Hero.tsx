import HeroImage from "@/assets/images/hero_image.webp";
import { LuMapPin, LuArrowRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      <div className="absolute inset-0 z-10 bg-slate-900/70" />

      <div className="absolute bottom-0 left-0 right-0 h-150 bg-linear-to-t from-slate-50/50 to-transparent z-10" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 shadow-2xl hover:bg-white/20 transition-all cursor-default">
          <LuMapPin className="text-emerald-400 drop-shadow-md" />
          <span className="tracking-wide">Desa Wisata, Indonesia</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-xl">
          Kembali ke Alam, <br />
          <span className="text-transparent bg-clip-text bg-linear-to-tr from-emerald-600 to-teal-200">
            Temukan Ketenangan.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md opacity-90">
          Nikmati suasana pedesaan yang asri, udara sejuk, dan kearifan lokal
          yang autentik. Healing terbaik tanpa perlu visa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            className="group px-8 py-4 text-base font-bold text-white bg-emerald-500 rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            href="#"
          >
            Mulai Jelajah
            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 z-20 animate-bounce">
        <span className="text-white/70 text-sm font-medium tracking-widest uppercase">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
