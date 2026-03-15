export default function Footer() {
  return (
    <footer className="py-10 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-lg font-bold text-white tracking-tight">
          Carvaz<span className="text-amber-400">Control</span>
        </span>
        <p className="text-slate-500 text-sm text-center">
          © {new Date().getFullYear()} CarvazControl. Todos los derechos reservados.
        </p>
        <p className="text-slate-600 text-xs">
          Hecho en México 🇲🇽
        </p>
      </div>
    </footer>
  )
}
