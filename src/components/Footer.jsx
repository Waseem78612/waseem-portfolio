// src/components/Footer.jsx
import { OWNER } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E30] py-8 px-5 sm:px-8 text-center" role="contentinfo">
      <p className="text-gray-600 text-sm">
        Built by{" "}
        <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
          {OWNER.name}
        </span>
        {" "}· Pakistan 🇵🇰
      </p>
      <p className="text-gray-800 text-xs mt-1">© {new Date().getFullYear()}</p>
    </footer>
  );
}
