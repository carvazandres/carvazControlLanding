import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CarvazControl — Tu ferretería, bajo control. Aunque no estés ahí.',
  description:
    'Sistema POS y ERP para ferreterías. Corte de turno automático, múltiples listas de precio, créditos con límites, pedidos inteligentes y seguimiento de entregas. 100% en la nube.',
  keywords: 'sistema ferretería, POS ferretería, control inventario ferretería, software ferretería México',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
