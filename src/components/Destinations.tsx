import { LuMapPin, LuStar, LuArrowRight } from "react-icons/lu";

interface Destination {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  category: string;
}

const destinationsData: Destination[] = [
  {
    id: 1,
    title: "Nusa Penida Island",
    location: "Bali, Indonesia",
    price: "IDR 750K",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1974&auto=format&fit=crop",
    category: "Island",
  },
  {
    id: 2,
    title: "Gunung Bromo",
    location: "East Java, Indonesia",
    price: "IDR 500K",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1605553589412-257a07706d87?q=80&w=2070&auto=format&fit=crop",
    category: "Mountain",
  },
  {
    id: 3,
    title: "Raja Ampat",
    location: "Papua, Indonesia",
    price: "IDR 3.5M",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=2070&auto=format&fit=crop",
    category: "Diving",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm bg-emerald-100 px-3 py-1 rounded-full">
          Top Destinations
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
          Jelajahi <span className="text-emerald-600">Favorit</span> Wisatawan
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Destinasi pilihan dengan rating tertinggi. Sudah terverifikasi aman,
          nyaman, dan pastinya Instagramable.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinationsData.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                <LuStar className="text-yellow-500 fill-yellow-500" />
                {item.rating}
              </div>
              <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide shadow-sm">
                {item.category}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                    <LuMapPin className="text-emerald-500" />
                    {item.location}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <p className="text-slate-400 text-xs">Start from</p>
                  <p className="text-emerald-600 font-bold text-lg">
                    {item.price}
                  </p>
                </div>

                <button className="p-3 bg-slate-50 text-slate-900 rounded-full hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                  <LuArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-full hover:border-emerald-600 hover:text-emerald-600 transition-all">
          View All Destinations
        </button>
      </div>
    </section>
  );
}
