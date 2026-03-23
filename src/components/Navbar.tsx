import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

/* Nav Lists */
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pin navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showScrolledStyle, setShowScrolledStyle] = useState(false);

  // Delay switch to scrolled style when menu is closed to prevent jarring effect
  useEffect(() => {
    if (!isMenuOpen) {
      const timer = setTimeout(() => setShowScrolledStyle(isScrolled), 220);
      return () => clearTimeout(timer);
    } else {
      setShowScrolledStyle(false);
    }
  }, [isMenuOpen, isScrolled]);

  return (
    // Navbar
    <nav
      className={cn(
        "fixed w-full z-40",
        !isMenuOpen && "transition-all duration-300",
        showScrolledStyle
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      {/* Container */}
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Foster Rae</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 pr-10">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav */}
        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size="24"></X> : <Menu size="24"></Menu>}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          {/* Nav Links */}
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
