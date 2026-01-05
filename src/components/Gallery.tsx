import { LuInstagram, LuCamera } from "react-icons/lu";
import TumpakSewu from "@/assets/images/tumpak-sewu.webp";
import MtBromo from "@/assets/images/mt-bromo.webp";
import LabuanBajo from "@/assets/images/labuan-bajo.webp";
import GiliTrawangan from "@/assets/images/gili-trawangan.webp";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  location: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: TumpakSewu,
    alt: "Waterfall",
    caption: "Chasing Waterfalls",
    location: "Tumpak Sewu",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop",
    alt: "Bali Rice Terrace",
    caption: "Green Therapy",
    location: "Ubud, Bali",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop",
    alt: "Pura Ulundanu",
    caption: "Gateway to Heaven",
    location: "Pura Ulundanu",
  },
  {
    id: 4,
    src: LabuanBajo,
    alt: "Komodo Island",
    caption: "Prehistoric Vibes",
    location: "Labuan Bajo",
  },
  {
    id: 5,
    src: MtBromo,
    alt: "Bromo Sunrise",
    caption: "Morning Glory",
    location: "Mt. Bromo",
  },
  {
    id: 6,
    src: GiliTrawangan,
    alt: "Beach Sunset",
    caption: "Golden Hour",
    location: "Gili Trawangan",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-4 bg-slate-50 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#059669 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 mb-6">
            <LuInstagram className="text-pink-500" />
            <span className="text-sm font-semibold tracking-wide">
              @LOKA.Indonesia
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Captured <span className="text-emerald-600 italic">Moments</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            No filters needed. Just pure, unadulterated nature rendering at
            infinite FPS. See what our travelers are experiencing.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-zoom-in"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />

              {/* Overlay Hover Effect */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-1">
                    <LuCamera />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    {item.caption}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4 font-medium">Want to see more?</p>
          <button className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm">
            Follow us on Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
