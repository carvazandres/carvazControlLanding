export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(248,250,252,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
        <div className="section-tag">Sistema POS & ERP para ferreterías</div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Tu ferretería,{' '}
          <span className="text-amber-400">bajo control.</span>
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-400 mb-8">
          Aunque no estés ahí.
        </p>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Deja de adivinar cuánto vendiste ayer. Deja de confiar en que te cuenten bien el corte.
          Con CarvazControl ves todo en tiempo real, desde donde estés.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="btn-primary text-base py-3.5 px-8">
            Quiero una demo gratis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#features" className="btn-secondary text-base py-3.5 px-8">
            Ver características
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800 pt-12">
          {[
            { value: '18', label: 'Módulos integrados' },
            { value: '100%', label: 'En la nube' },
            { value: 'Multi', label: 'Sucursal' },
            { value: '0', label: 'Instalaciones requeridas' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
