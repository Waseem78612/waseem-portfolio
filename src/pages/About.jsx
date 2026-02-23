// src/pages/About.jsx
import { OWNER, STATS, ABOUT_TAGS, FAVORITE_QUOTE } from "../data/portfolioData";

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="min-h-screen pt-24 pb-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto animate-fadeUp">

        <p className="text-xs font-semibold tracking-[4px] uppercase text-violet-400 mb-2">01 / About</p>
        <h1
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12"
          style={{ fontFamily: "'Clash Display',sans-serif" }}
        >
          Who I Am
        </h1>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}
          <div className="flex flex-col items-center gap-7">
            <div className="relative">
              {OWNER.photo ? (
                <img
                  src={OWNER.photo}
                  alt={OWNER.name}
                  className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl object-cover border border-[#222230] shadow-2xl"
                />
              ) : (
                <div
                  aria-label="Avatar placeholder"
                  className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-[#111116] border border-[#222230] flex flex-col items-center justify-center gap-3 shadow-2xl select-none"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center text-xl font-black text-white">
                    {OWNER.initials}
                  </div>
                  <p className="text-gray-700 text-[11px] text-center px-4 leading-relaxed">
                    Add photo in<br />
                    <code className="text-violet-500/70 text-[10px]">portfolioData.js</code>
                  </p>
                </div>
              )}
              <div aria-hidden="true" className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-2xl border border-violet-500/10 -z-10" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 w-full" role="list">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="text-center p-3 sm:p-4 rounded-xl bg-[#111116] border border-[#222230] hover:border-violet-500/20 transition-colors duration-300"
                >
                  <p className="text-xl sm:text-2xl font-black text-violet-400">{value}</p>
                  <p className="text-[11px] text-gray-600 mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-400 text-sm sm:text-base leading-8">
              Hi, I'm <strong className="text-white font-semibold">{OWNER.name}</strong> — a fresher frontend web developer from{" "}
              {OWNER.location}. I started learning web development on my own, beginning with{" "}
              <strong className="text-orange-400">HTML & CSS</strong>, then moving on to{" "}
              <strong className="text-yellow-400">JavaScript</strong>, and now actively learning{" "}
              <strong className="text-violet-400">React</strong> by building real projects.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-8">
              I'm at the beginning of my developer journey — and I'm okay with that. I focus on
              understanding things properly rather than rushing. I build, make mistakes, fix them,
              and keep going. I'm actively looking for my first opportunity to grow inside a real team.
            </p>

            <div className="flex flex-wrap gap-2 mt-1" role="list">
              {ABOUT_TAGS.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#111116] border border-[#222230] text-gray-400 hover:border-violet-500/25 hover:text-gray-200 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2 mt-2 text-sm text-gray-600">
              <span>📧 <a href={`mailto:${OWNER.email}`} className="hover:text-violet-400 transition-colors">{OWNER.email}</a></span>
              <span>📍 {OWNER.location}</span>
              <span>🐙 <a href={OWNER.github} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">github.com/Waseem78612</a></span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 p-7 sm:p-8 rounded-2xl bg-[#111116] border border-[#222230] relative overflow-hidden">
          <span aria-hidden="true" className="absolute top-4 left-5 text-6xl text-violet-500/10 font-serif leading-none select-none">"</span>
          <blockquote className="relative z-10 text-center">
            <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed">
              "{FAVORITE_QUOTE.text}"
            </p>
            <footer className="text-gray-600 text-sm mt-3">— {FAVORITE_QUOTE.author}</footer>
          </blockquote>
        </div>

      </div>
    </section>
  );
}
