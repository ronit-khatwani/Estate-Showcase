import { Link } from "wouter";
import { Building2, MapPin, Phone, Mail, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(220,10%,5%)] border-t border-[hsl(220,10%,12%)]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-semibold">
                Estate<span className="text-primary">Vista</span>
              </span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed mb-5">
              Premium real estate discovery platform. Find your perfect property across residential, commercial, and investment markets.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-[hsl(220,10%,20%)] flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary transition-all duration-200"
                  data-testid={`footer-social-${i}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-5">Properties</h4>
            <ul className="space-y-2.5">
              {[
                ["Residential", "/residential"],
                ["Commercial", "/commercial"],
                ["Plots & Land", "/plots"],
                ["Industrial", "/industrial"],
                ["Map View", "/map"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>
                    <span className="text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                ["About Us", "/about"],
                ["Our Agents", "/agents"],
                ["List Property", "/contact"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href}>
                    <span className="text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/60">350 Fifth Avenue, New York, NY 10118</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground/60">+1 (800) 555-0190</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground/60">hello@estatevista.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[hsl(220,10%,12%)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/30">
            © 2025 EstateVista. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-foreground/30 hover:text-primary/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
