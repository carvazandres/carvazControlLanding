import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-slate-800/40 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-tag">Empieza hoy</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              ¿Listo para tomar
              <br />
              <span className="text-amber-400">el control?</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Cuéntanos sobre tu ferretería y te hacemos una demo personalizada.
              Sin compromiso, sin tarjeta de crédito.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📞', text: 'Te llamamos en menos de 24 horas' },
                { icon: '🎯', text: 'Demo personalizada para tu tipo de negocio' },
                { icon: '🔒', text: 'Tus datos son confidenciales y no se comparten' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-slate-300">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
