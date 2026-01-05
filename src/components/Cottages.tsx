import { LuStar, LuCoffee, LuWind, LuArrowUpRight } from "react-icons/lu";
import BambooHavenLodge from "@/assets/images/bamboo-haven-lodge.webp";
import VillaBromo from "@/assets/images/villa-bromo.webp";
import LakeViewGlamping from "@/assets/images/lakeview-glamping.webp";

interface Cottage {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  isPopular?: boolean;
}

const cottagesData: Cottage[] = [
  {
    id: 1,
    name: "Bamboo Haven Lodge, Bali",
    description:
      "An eco-friendly bamboo villa offering 180-degree valley views. Perfect for a digital detox.",
    price: "IDR 1.2M / night",
    image: BambooHavenLodge,
    features: ["High-Speed WiFi", "Free Breakfast", "Natural Breeze"],
    isPopular: true,
  },
  {
    id: 2,
    name: "Lakeview Glamping, Raja Ampat",
    description:
      "Experience luxury camping right by the lake. Listen to the crickets without the fear of mosquito bites. 5-star facilities with immaculate vibes.",
    price: "IDR 950K / night",
    image: LakeViewGlamping,
    features: ["Bonfire", "BBQ Area", "Private Bath"],
  },
  {
    id: 3,
    name: "Villa Paiton, Bromo",
    description:
      "Villa Paiton Bromo, located in Probolinggo in the East Java region. It features a terrace, and guests can enjoy free private parking and free WiFi. Rooms at Villa Paiton Bromo are equipped with a desk. Bed linen is provided in all units.",
    price: "IDR 900K / night",
    image: VillaBromo,
    features: ["Free-WiFi", "Mountain View", "King Bed"],
  },
];

export default function Cottages() {
  return (
    <section id="cottages" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Stay in{" "}
            <span className="underline decoration-emerald-500 decoration-4 underline-offset-4">
              Comfort
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Take a break from your hustle. Choose a sanctuary to cool down your
            mind and recharge your biological battery.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {cottagesData.map((cottage, index) => (
            // ZIG-ZAG LOGIC
            <div
              key={cottage.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* === IMAGE SIDE === */}
              <div className="w-full lg:w-1/2 relative group">
                {/* Background Blob */}
                <div
                  className={`absolute -inset-4 bg-linear-to-r from-emerald-100 to-teal-100 rounded-4xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500 -z-10`}
                />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={cottage.image}
                    alt={cottage.name}
                    className="w-full h-100 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />

                  {/* Popular Badge */}
                  {cottage.isPopular && (
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-emerald-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm flex items-center gap-2">
                      🔥 Most Picked
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs border border-emerald-200 px-3 py-1 rounded-full">
                    Available
                  </span>
                  <span className="h-px w-20 bg-emerald-200"></span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {cottage.name}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {cottage.description}
                </p>

                <div className="flex gap-6 py-4 border-y border-slate-100">
                  {cottage.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-slate-500 text-sm font-medium"
                    >
                      <div className="p-2 bg-slate-50 rounded-full text-emerald-600">
                        {idx === 0 ? (
                          <LuStar />
                        ) : idx === 1 ? (
                          <LuCoffee />
                        ) : (
                          <LuWind />
                        )}
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-sm text-slate-400">Start from</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {cottage.price}
                    </p>
                  </div>

                  <button className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-emerald-500/30">
                    Book Now
                    <LuArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
