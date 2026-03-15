const comparisons = [
  {
    generic: 'Diseñado por ingenieros que nunca estuvieron detrás de un mostrador',
    ours: 'Construido adentro de una empresa real, resolviendo problemas reales',
  },
  {
    generic: 'Un solo precio de lista para todos los clientes',
    ours: 'Precios automáticos por tipo de cliente: público, mayoreo, especial',
  },
  {
    generic: 'Compras a ojo, sin datos de ventas reales',
    ours: 'Órdenes de compra generadas con datos de ventas + stock actual',
  },
  {
    generic: 'El corte lo hace alguien manualmente y "te avisa"',
    ours: 'Corte automático con reporte por email al dueño, sin intervención humana',
  },
]

export default function ValueProp() {
  return (
    <section id="por-que" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-tag">¿Por qué CarvazControl?</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            No te vendemos software.
            <br />
            <span className="text-amber-400">Te vendemos tranquilidad.</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            La tranquilidad de que tu negocio funciona bien, aunque tú estés en otro lado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
            <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Sistema genérico</span>
          </div>
          <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-center">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">CarvazControl</span>
          </div>

          {comparisons.map((c, i) => (
            <>
              <div key={`g-${i}`} className="card flex gap-3 items-start border-red-900/20">
                <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-slate-400 text-sm">{c.generic}</span>
              </div>
              <div key={`o-${i}`} className="card flex gap-3 items-start border-amber-500/20 bg-amber-500/5">
                <svg className="w-5 h-5 text-green-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-200 text-sm">{c.ours}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
