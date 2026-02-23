// src/pages/Home.jsx
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { OWNER, TYPING_TITLES } from "../data/portfolioData";
import { useTyping } from "../hooks/useTyping";

export default function Home() {
  const typed    = useTyping(TYPING_TITLES);
  const navigate = useNavigate();
  const goTo     = useCallback((path) => navigate(path), [navigate]);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"
      />
      {/* Glow orbs */}
      <div aria-hidden="true" className="absolute top-1/3 -left-32 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center pt-28 sm:pt-24 pb-16 animate-fadeUp">

        {/* Avatar — clear gap from 64px header via pt-28 */}
        <div className="relative inline-block mb-6 mt-2">
          {OWNER.photo ? (
            <img
              src={OWNER.photo}
              alt={`${OWNER.name} — profile photo`}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-[#1E1E30] shadow-2xl mx-auto"
            />
          ) : (
            /*
             * 📸 Add your photo later:
             *  1. Put photo.jpg in src/assets/
             *  2. portfolioData.js → import myPhoto from "../assets/photo.jpg"
             *  3. Set  photo: myPhoto
             */
            <div
              aria-label={`${OWNER.name} avatar`}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-black text-white mx-auto select-none shadow-2xl shadow-violet-500/20 ring-4 ring-violet-500/10 animate-float"
            >
              {OWNER.initials}
            </div>
          )}
          {/* Available dot */}
          <span aria-label="Available for work" className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-50 animate-ping" />
            <span className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 border-2 border-[#080810]" />
          </span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-violet-500/8 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          I'm{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {OWNER.name}
          </span>
        </h1>

        {/* Typing */}
        <p
          className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-5 h-8 sm:h-9"
          aria-live="polite"
          aria-label={`Current role: ${typed}`}
        >
          <span aria-hidden="true" className="text-gray-300">{typed}</span>
          <span aria-hidden="true" className="animate-blink text-violet-400 ml-0.5">|</span>
        </p>

        {/* Bio */}
        <p className="max-w-xl mx-auto text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10">
          {OWNER.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <button
            onClick={() => goTo("/projects")}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm tracking-wide hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg shadow-violet-500/25"
          >
            See My Projects →
          </button>
          <button
            onClick={() => goTo("/contact")}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-[#1E1E30] text-gray-400 font-semibold text-sm hover:border-violet-500/40 hover:text-white hover:bg-violet-500/5 transition-all duration-200"
          >
            Get in Touch 👋
          </button>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href={OWNER.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-600 hover:text-violet-400 transition-colors duration-200 text-sm font-medium"
          >
            GitHub ↗
          </a>
          <span className="w-px h-4 bg-[#1E1E30]" aria-hidden="true" />
          <a
            href={`mailto:${OWNER.email}`}
            aria-label="Send email"
            className="text-gray-600 hover:text-violet-400 transition-colors duration-200 text-sm font-medium"
          >
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}
