import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LuTreePalm } from "react-icons/lu";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
  };

  const navLinks: NavItem[] = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.destinations"), href: "#destinations" },
    { label: t("nav.cottages"), href: "#cottages" },
    { label: t("nav.gallery"), href: "#gallery" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10">
      <div className="relative z-20 max-w-screen flex items-center justify-between py-4 px-8 bg-slate-900/90 backdrop-blur-md shadow-lg">
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <div className="p-1.5 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-all">
            <LuTreePalm className="text-2xl text-emerald-500" />
          </div>

          <span className="self-center text-2xl font-bold tracking-tighter flex items-baseline">
            <span className="text-emerald-500">LOKA</span>
            <span className="text-white text-3xl leading-none">.</span>
          </span>
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="transition-all text-white border-b-2 border-b-transparent hover:border-emerald-500 hover:text-emerald-500"
            >
              {link.label}
            </a>
          ))}

          {/* i18n */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 py-1 px-3 border border-white/20 rounded-full text-xs font-bold text-white hover:border-emerald-500 hover:text-emerald-400 transition-all uppercase"
          >
            <span>{i18n.language === "en" ? "EN" : "ID"}</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden inline-flex text-3xl text-white justify-center items-center hover:text-emerald-400 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? (
            <RxCross2 className="transition-all cursor-pointer" />
          ) : (
            <RxHamburgerMenu className="transition-all cursor-pointer" />
          )}
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out transform origin-top ${
          isMobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col font-medium p-4 space-y-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`block p-4 rounded-lg transition-all ${
                  index % 2 === 0 ? "bg-white/5" : "bg-transparent"
                } hover:bg-emerald-500/20 hover:text-emerald-400 text-slate-100 hover:pl-6`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
