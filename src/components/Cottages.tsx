import { useTranslation } from "react-i18next";
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

export default function Cottages() {
  const { t } = useTranslation();

  const cottagesData: Cottage[] = [
    {
      id: 1,
      name: "Bamboo Haven Lodge, Bali",
      description: t("cottages.items.bamboo.desc"),
      price: "IDR 1.2M / night",
      image: BambooHavenLodge,
      features: [
        t("cottages.features.wifi"),
        t("cottages.features.breakfast"),
        t("cottages.features.breeze"),
      ],
      isPopular: true,
    },
    {
      id: 2,
      name: "Lakeview Glamping, Raja Ampat",
      description: t("cottages.items.lakeview.desc"),
      price: "IDR 950K / night",
      image: LakeViewGlamping,
      features: [
        t("cottages.features.bonfire"),
        t("cottages.features.bbq"),
        t("cottages.features.bath"),
      ],
    },
    {
      id: 3,
      name: "Villa Paiton, Bromo",
      description: t("cottages.items.bromo.desc"),
      price: "IDR 900K / night",
      image: VillaBromo,
      features: [
        t("cottages.features.wifi"),
        t("cottages.features.mountain"),
        t("cottages.features.kingbed"),
      ],
    },
  ];

  return (
    <section id="cottages" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {t("cottages.heading_start")}{" "}
            <span className="underline decoration-emerald-500 decoration-4 underline-offset-4">
              {t("cottages.heading_highlight")}
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("cottages.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {cottagesData.map((cottage, index) => (
            <div
              key={cottage.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div
                  className={`absolute -inset-4 bg-linear-to-r from-emerald-100 to-teal-100 rounded-4xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500 -z-10`}
                />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={cottage.image}
                    alt={cottage.name}
                    className="w-full h-100 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />

                  {cottage.isPopular && (
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-emerald-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm flex items-center gap-2">
                      🔥 {t("cottages.ui.most_picked")}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs border border-emerald-200 px-3 py-1 rounded-full">
                    {t("cottages.ui.available")}
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
                    <p className="text-sm text-slate-400">
                      {t("cottages.ui.start_from")}
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {cottage.price}
                    </p>
                  </div>

                  <button className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-emerald-500/30">
                    {t("cottages.ui.book_now")}
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
