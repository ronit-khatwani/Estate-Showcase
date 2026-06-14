import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Buy", href: "/properties?status=for_sale" },
  { label: "Rent", href: "/properties?status=for_rent" },
  {
    label: "Explore",
    href: "#",
    children: [
      { label: "Residential", href: "/residential" },
      { label: "Commercial", href: "/commercial" },
      { label: "Plots & Land", href: "/plots" },
      { label: "Industrial", href: "/industrial" },
      { label: "Map View", href: "/map" },
    ],
  },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[hsl(220,10%,8%)]/95 backdrop-blur-md border-b border-[hsl(220,10%,15%)] shadow-2xl"
          : "bg-transparent"
      )}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" data-testid="nav-logo">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight">
              Estate<span className="text-primary">Vista</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", dropdownOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,18%)] shadow-2xl py-1"
                    >
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          <div
                            className="px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-[hsl(220,10%,14%)] transition-colors cursor-pointer"
                            data-testid={`nav-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                          >
                            {child.label}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.href} href={link.href}>
                <span
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 cursor-pointer"
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            )
          )}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact" data-testid="nav-cta">
            <button className="hidden md:block px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_20px_hsl(43,74%,49%,0.4)]">
              List Property
            </button>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
            data-testid="nav-mobile-toggle"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(220,10%,8%)]/98 backdrop-blur-md border-t border-[hsl(220,10%,15%)]"
            data-testid="nav-mobile-menu"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="py-2.5 text-sm font-medium text-foreground/50 uppercase tracking-wider text-xs">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <div className="py-2 pl-3 text-sm text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                          {child.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <div className="py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                      {link.label}
                    </div>
                  </Link>
                )
              )}
              <Link href="/contact">
                <button className="mt-3 w-full py-3 bg-primary text-primary-foreground text-sm font-semibold">
                  List Property
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
