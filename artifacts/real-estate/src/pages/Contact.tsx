import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "buy", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="bg-[hsl(220,10%,7%)] border-b border-[hsl(220,10%,13%)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Get In Touch</span>
            <h1 className="font-serif text-4xl font-bold mt-2">Contact Us</h1>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Ready to buy, sell, or invest? Our expert agents are standing by to guide you through every step.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {[
              { Icon: MapPin, title: "Head Office", desc: "12, Judges Bungalow Road, Suite 4800\nBodakdev, Ahmedabad, Gujarat 380054" },
              { Icon: Phone, title: "Phone", desc: "+91 98250 11001\n+91 79 4001 1001" },
              { Icon: Mail, title: "Email", desc: "hello@estatevista.com\nagents@estatevista.com" },
              { Icon: Clock, title: "Hours", desc: "Mon – Fri: 8am – 8pm IST\nSat – Sun: 9am – 6pm IST" },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
                data-testid={`contact-info-${i}`}
              >
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm mb-1">{title}</div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
                data-testid="contact-success"
              >
                <CheckCircle className="w-16 h-16 text-primary mb-5" />
                <h3 className="font-serif text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Our team will be in touch within 24 hours. We look forward to helping you find your perfect property.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 border border-primary text-primary text-sm hover:bg-primary/10 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-5"
                data-testid="form-contact"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[hsl(220,10%,12%)] border border-[hsl(220,10%,20%)] px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Smith"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[hsl(220,10%,12%)] border border-[hsl(220,10%,20%)] px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[hsl(220,10%,12%)] border border-[hsl(220,10%,20%)] px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Inquiry Type</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full bg-[hsl(220,10%,12%)] border border-[hsl(220,10%,20%)] px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      data-testid="select-inquiry-type"
                    >
                      <option value="buy">Buy a Property</option>
                      <option value="rent">Rent a Property</option>
                      <option value="sell">Sell / List Property</option>
                      <option value="invest">Investment Advice</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[hsl(220,10%,12%)] border border-[hsl(220,10%,20%)] px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about what you're looking for..."
                    data-testid="input-message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(43,74%,49%,0.4)]"
                  data-testid="button-submit"
                >
                  Send Message
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
