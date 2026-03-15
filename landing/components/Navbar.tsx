export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold text-white tracking-tight">
          Carvaz<span className="text-amber-400">Control</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Características</a>
          <a href="#por-que" className="hover:text-white transition-colors">¿Por qué nosotros?</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
        <a href="#contacto" className="btn-primary text-sm py-2 px-4">
          Quiero una demo
        </a>
      </nav>
    </header>
  )
}
