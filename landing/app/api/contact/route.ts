import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
    }),
  })
  const data = await res.json()
  return data.success === true
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, telefono, empresa, num_sucursales, como_se_entero, turnstileToken } = body

    if (!nombre?.trim() || !telefono?.trim()) {
      return NextResponse.json({ error: 'Nombre y teléfono son requeridos.' }, { status: 400 })
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Verifica que eres humano.' }, { status: 400 })
    }

    const isHuman = await verifyTurnstile(turnstileToken)
    if (!isHuman) {
      return NextResponse.json({ error: 'Verificación de captcha fallida.' }, { status: 400 })
    }

    const { error: dbError } = await supabase.from('leads').insert({
      nombre: nombre.trim(),
      telefono: telefono.trim(),
      empresa: empresa?.trim() || null,
      num_sucursales: num_sucursales ? Number(num_sucursales) : null,
      como_se_entero: como_se_entero?.trim() || null,
    })

    if (dbError) {
      console.error('Supabase error:', dbError)
      return NextResponse.json({ error: 'Error guardando datos.' }, { status: 500 })
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'CarvazControl <no-reply@resend.dev>',
      to: [process.env.RESEND_TO_EMAIL!],
      subject: `Ferretera interesada - ${empresa?.trim() || nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F172A; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #F59E0B; margin: 0; font-size: 20px;">Nuevo contacto en CarvazControl</h1>
          </div>
          <div style="background: #1E293B; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #334155;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #94A3B8; font-size: 14px; width: 40%;">Nombre</td>
                <td style="padding: 10px 0; color: #F8FAFC; font-weight: 600;">${nombre}</td>
              </tr>
              <tr style="border-top: 1px solid #334155;">
                <td style="padding: 10px 0; color: #94A3B8; font-size: 14px;">Teléfono</td>
                <td style="padding: 10px 0; color: #F8FAFC; font-weight: 600;">${telefono}</td>
              </tr>
              ${empresa ? `<tr style="border-top: 1px solid #334155;"><td style="padding: 10px 0; color: #94A3B8; font-size: 14px;">Empresa</td><td style="padding: 10px 0; color: #F8FAFC;">${empresa}</td></tr>` : ''}
              ${num_sucursales ? `<tr style="border-top: 1px solid #334155;"><td style="padding: 10px 0; color: #94A3B8; font-size: 14px;">Sucursales</td><td style="padding: 10px 0; color: #F8FAFC;">${num_sucursales}</td></tr>` : ''}
              ${como_se_entero ? `<tr style="border-top: 1px solid #334155;"><td style="padding: 10px 0; color: #94A3B8; font-size: 14px;">¿Cómo se enteró?</td><td style="padding: 10px 0; color: #F8FAFC;">${como_se_entero}</td></tr>` : ''}
              <tr style="border-top: 1px solid #334155;">
                <td style="padding: 10px 0; color: #94A3B8; font-size: 14px;">Fecha</td>
                <td style="padding: 10px 0; color: #F8FAFC;">${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 })
  }
}
