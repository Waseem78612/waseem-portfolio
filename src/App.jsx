// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Skills   from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  // Lock dark mode always
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#080810] text-[#e2e2f0]">
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/skills"   element={<Skills />}   />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />}  />
          <Route path="*"         element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
