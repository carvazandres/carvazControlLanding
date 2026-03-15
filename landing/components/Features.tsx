const features = [
  {
    icon: '💰',
    title: 'Corte de turno automático',
    description:
      'El sistema cierra la caja por turno y manda un resumen por correo al dueño sin que nadie tenga que hacer nada. Sabes exactamente cuánto entró, cómo se cobró y quién lo cobró.',
  },
  {
    icon: '🏷️',
    title: 'Precios por tipo de cliente',
    description:
      '¿Clientes de mostrador, de obra y mayoristas? Cada uno ve su precio automáticamente. Sin calculadoras, sin errores, sin precios "que se dieron por error".',
  },
  {
    icon: '🛒',
    title: 'Órdenes de compra inteligentes',
    description:
      'El sistema sabe cuánto vendiste y cuánto tienes en stock. Genera la orden de compra por proveedor con números reales. Compras con datos, no con corazonadas.',
  },
  {
    icon: '📋',
    title: 'Créditos con límites reales',
    description:
      'Define cuántos días de crédito puede tener un cliente y cuánto es el máximo que le puedes fiar. El sistema hace respetar las reglas aunque el vendedor "quiera hacerle el favor".',
  },
  {
    icon: '🚚',
    title: 'De la orden a la entrega',
    description:
      'Levanta pedidos, asigna rutas, sigue el estado de cada entrega. Sabes qué salió, quién lo llevó y si ya llegó. Adiós al cuaderno de entregas y los mensajes de WhatsApp.',
  },
  {
    icon: '🏪',
    title: 'Multi-sucursal en una sola vista',
    description:
      '¿Más de un local? Cada sucursal con su propio inventario, ventas y corte de caja — y tú ves todo desde una sola pantalla, sin importar dónde estés.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-tag">Lo que hace diferente a CarvazControl</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Todo lo que necesita tu ferretería,
            <br />
            <span className="text-amber-400">en un solo lugar</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card group">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
