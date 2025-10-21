import React, { useState } from "react";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#0F172A] text-white shadow-md z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <h1 className="text-xl font-bold tracking-wide">
            Raynier Mora
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Inicio</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">Acerca de mí</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1E293B] text-white py-3">
            <ul className="flex flex-col items-center space-y-3 font-medium">
              <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition-colors">Acerca de mí</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition-colors">Proyectos</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section con Background */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center h-screen px-6 pt-24 overflow-hidden"
        style={{
          backgroundImage: `url('/portafolio/images/backgrounds/hero-bg-desktop.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Overlay con gradiente adicional */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-transparent"></div>

        {/* Contenido principal */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-2 leading-tight text-white">
            Hola, soy
          </h2>
          <span className="bg-gradient-to-r text-6xl from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            Raynier Mora
          </span>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 mt-6 leading-relaxed">
            Desarrollador Full Stack especializado en{" "}
            <span className="font-semibold text-white bg-blue-600/20 px-2 py-1 rounded">
              Angular, Ionic y Laravel
            </span>
            . Creo aplicaciones modernas, seguras y escalables con enfoque en
            rendimiento y experiencia de usuario.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium"
            >
              Ver proyectos
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm font-medium"
            >
              Contactar
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Partículas flotantes decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-ping delay-500"></div>
        </div>
      </section>

      {/* Components */}
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Raynier Mora. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-500 mt-2">Desarrollado con React + Vite + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
