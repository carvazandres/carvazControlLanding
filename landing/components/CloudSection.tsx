const benefits = [
  'Sin técnicos. Sin instalaciones. Sin licencias por computadora.',
  'Ábrelo en la PC del mostrador, en la laptop de la bodega, en tu celular mientras desayunas.',
  'Tus datos siempre disponibles, siempre seguros, siempre actualizados.',
  'Mientras tu competencia sigue con el sistema que "solo funciona en esa compu de la caja", tú ya vas un paso adelante.',
]

export default function CloudSection() {
  return (
    <section className="py-24 bg-slate-800/40 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-tag">100% en la nube</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Entra desde cualquier
              <span className="text-amber-400"> dispositivo.</span>
              <br />
              Solo necesitas internet.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              El sistema vive en la nube — no en un servidor en la trastienda que se apaga
              cuando hay luz, ni en una sola computadora que "nadie puede tocar".
            </p>
            <a href="#contacto" className="btn-primary">
              Empezar hoy
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            {benefits.map((b) => (
              <div key={b} className="flex gap-3 items-start p-4 rounded-lg bg-slate-800 border border-slate-700">
                <svg className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-300 text-sm leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
