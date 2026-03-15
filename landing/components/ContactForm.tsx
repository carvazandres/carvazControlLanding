'use client'

import { useState, useRef } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

const howOptions = [
  'Redes sociales (Facebook, Instagram)',
  'Recomendación de un conocido',
  'Búsqueda en Google',
  'WhatsApp / mensaje directo',
  'Otro',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    empresa: '',
    num_sucursales: '',
    como_se_entero: '',
  })
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const turnstileRef = useRef<any>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!turnstileToken) {
      setErrorMsg('Por favor completa la verificación de seguridad.')
      return
    }
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Ocurrió un error. Intenta de nuevo.')
        setStatus('error')
        turnstileRef.current?.reset()
        setTurnstileToken(null)
      } else {
        setStatus('success')
      }
    } catch {
      setErrorMsg('No se pudo conectar. Revisa tu conexión e intenta de nuevo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Listo, {form.nombre.split(' ')[0]}!</h3>
        <p className="text-slate-400 max-w-sm mx-auto">
          Recibimos tu información. Te contactaremos a la brevedad para agendar tu demo.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Nombre <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Juan Rodríguez"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Teléfono <span className="text-amber-400">*</span>
          </label>
          <input
            type="tel"
            name="telefono"
            required
            value={form.telefono}
            onChange={handleChange}
            placeholder="+52 55 1234 5678"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Empresa <span className="text-slate-500 font-normal">(opcional)</span>
          </label>
          <input
            type="text"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Ferretería El Clavo"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Número de sucursales <span className="text-slate-500 font-normal">(opcional)</span>
          </label>
          <input
            type="number"
            name="num_sucursales"
            min="1"
            value={form.num_sucursales}
            onChange={handleChange}
            placeholder="1"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          ¿Cómo se enteró de nosotros? <span className="text-slate-500 font-normal">(opcional)</span>
        </label>
        <select
          name="como_se_entero"
          value={form.como_se_entero}
          onChange={handleChange}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-colors appearance-none"
        >
          <option value="" className="bg-slate-800">Selecciona una opción</option>
          {howOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-slate-800">{opt}</option>
          ))}
        </select>
      </div>

      <div className="pt-2">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'}
          onSuccess={(token) => setTurnstileToken(token)}
          onError={() => { setTurnstileToken(null) }}
          onExpire={() => { setTurnstileToken(null) }}
          options={{ theme: 'dark', language: 'es' }}
        />
      </div>

      {errorMsg && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Quiero mi demo gratis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>
      <p className="text-xs text-slate-500 text-center">
        Sin spam. Te contactamos solo para agendar tu demo.
      </p>
    </form>
  )
}
