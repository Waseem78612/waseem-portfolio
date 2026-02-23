// src/pages/Contact.jsx
import { useState, useCallback } from "react";
import { OWNER } from "../data/portfolioData";

const INITIAL = { name: "", email: "", message: "" };

export default function Contact() {
  const [form,  setForm]  = useState(INITIAL);
  const [sent,  setSent]  = useState(false);
  const [error, setError] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSent(true);
    setForm(INITIAL);
    setTimeout(() => setSent(false), 5000);
  }, [form]);

  return (
    <section aria-labelledby="contact-heading" className="min-h-screen pt-24 sm:pt-28 pb-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto animate-fadeUp">

        <p className="text-xs font-semibold tracking-[4px] uppercase text-violet-400 mb-2">04 / Contact</p>
        <h1
          id="contact-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          Get in Touch
        </h1>
        <p className="text-gray-600 mb-10 sm:mb-16 max-w-xl text-sm">
          Have an opportunity or just want to say hi? Send me a message — I actually read them.
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">

          {/* Info */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="p-5 sm:p-7 rounded-2xl bg-[#13131F] border border-[#1E1E30]">
              <h2 className="text-white font-bold text-sm sm:text-base mb-5 sm:mb-6">Direct Contact</h2>
              <div className="flex flex-col gap-4 sm:gap-5" role="list" aria-label="Contact information">
                {[
                  { icon: "📧", label: "Email",  value: OWNER.email,        href: `mailto:${OWNER.email}` },
                  { icon: "🐙", label: "GitHub", value: "github.com/Waseem78612", href: OWNER.github },
                  { icon: "📍", label: "Based",  value: OWNER.location,    href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} role="listitem" className="flex items-center gap-3 sm:gap-4">
                    <div
                      aria-hidden="true"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-500/8 border border-violet-500/12 flex items-center justify-center text-sm sm:text-base flex-shrink-0"
                    >
                      {icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-violet-400 text-xs font-semibold uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={label === "GitHub" ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors duration-200 break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-500 text-xs sm:text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 text-xs mt-5 border-t border-[#1E1E30] pt-4">
                💼 LinkedIn coming soon — will be added when ready.
              </p>
            </div>

            {/* Availability */}
            <div className="p-4 sm:p-5 rounded-2xl bg-violet-500/5 border border-violet-500/12">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <p className="text-emerald-400 font-semibold text-sm">Open to opportunities</p>
              </div>
              <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                Available for frontend roles and React projects. Based in Pakistan, open to remote work.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-7 rounded-2xl bg-[#13131F] border border-[#1E1E30]"
          >
            {sent && (
              <div role="alert" className="p-3 sm:p-4 rounded-xl bg-violet-500/8 border border-violet-500/20 text-violet-400 text-sm font-medium">
                ✅ Got it! I'll get back to you soon.
              </div>
            )}
            {error && (
              <div role="alert" className="p-3 sm:p-4 rounded-xl bg-red-500/8 border border-red-500/20 text-red-400 text-sm font-medium">
                ⚠️ {error}
              </div>
            )}

            {[
              { id: "name",  label: "Your Name",  type: "text",  placeholder: "Your name"      },
              { id: "email", label: "Your Email", type: "email", placeholder: "your@email.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="flex flex-col gap-1.5">
                <label htmlFor={id} className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#080810] border border-[#1E1E30] text-white placeholder-gray-700 text-sm focus:border-violet-500/40 focus:outline-none transition-all duration-200"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Hey Waseem, I wanted to reach out about..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#080810] border border-[#1E1E30] text-white placeholder-gray-700 text-sm resize-none focus:border-violet-500/40 focus:outline-none transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm hover:opacity-90 hover:scale-[1.01] active:scale-95 transition-all duration-200 shadow-lg shadow-violet-500/15"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
