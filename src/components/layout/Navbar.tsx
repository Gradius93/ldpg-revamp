import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { MenuItem } from "@/types";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems: MenuItem[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="border-b border-black/10 relative">
      <div className="max-w-7xl h-24 mx-auto px-4 py-4 flex items-center justify-between">
        <Image src="/images/LOGO43.png" alt="LDPG" width={100} height={100} />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 text-sm">
          {menuItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group transition-colors duration-200"
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-1 w-full h-0.25 bg-black transform transition-transform duration-300 ease-out origin-center translate-y-2 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Full-Screen Modal */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Logo */}
        <div
          className={`absolute top-8 left-4 transition-all duration-500 delay-100 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Image
            src="/images/LOGO43.png"
            alt="LDPG logo"
            width={100}
            height={100}
          />
        </div>

        {/* Close Button */}
        <button
          className="absolute top-6 right-6 w-8 h-8 flex flex-col justify-center items-center"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-black rotate-45 translate-y-0.5"></span>
          <span className="block w-6 h-0.5 bg-black -rotate-45 -translate-y-0.5"></span>
        </button>

        <nav
          className={`flex flex-col items-center space-y-8 transition-all duration-500 delay-100 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-2xl font-medium hover:underline transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : "0ms",
              }}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
