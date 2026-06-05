import Link from "next/link";
export default function BienvenidaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a1628]">

      {/* HERO — foto completa */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: '55vh', aspectRatio: '16/9' }}>
        <img
          src="/portada.jpeg"
          alt="Bailanta Tropical"
          className="w-full h-full object-cover object-[center_50%]"
          style={{ filter: 'saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628]/85" />
        <div className="absolute bottom-5 left-0 right-0 text-center">
          <h1 className="font-bold text-white text-5xl leading-tight drop-shadow-lg"
              style={{ fontFamily: 'Pacifico, cursive' }}>
            Bailanta <span className="text-yellow-400">Tropical</span>
          </h1>
        </div>
      </div>

      {/* BODY — botones */}
      <div className="flex flex-col items-center px-5 pt-6 pb-10 flex-1">
        <span className="border border-yellow-400 text-yellow-400 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3">
          🌴 bienvenidos 🌴
        </span>
        <p className="text-white/60 text-sm text-center mb-5">
          La banda que hace mover los pies en cada rincón
        </p>
        <div className="w-12 h-1 bg-yellow-400 rounded mb-5" />

        <nav className="flex flex-col gap-3 w-full max-w-sm">
          <Link href="/artistas"
            className="flex items-center justify-between bg-yellow-400 text-[#0a1628] font-bold px-5 py-4 rounded-2xl hover:-translate-y-0.5 transition-transform">
            <span>🚓</span>
            <span className="flex-1 text-left ml-3">Inicio</span>
            <span>→</span>
          </Link>
          <Link href="/historia"
            className="flex items-center justify-between bg-white/10 text-white border border-white/20 font-bold px-5 py-4 rounded-2xl hover:-translate-y-0.5 transition-transform">
            <span>📖</span>
            <span className="flex-1 text-left ml-3">Historia del grupo</span>
            <span>→</span>
          </Link>
          <Link href="/contrato"
            className="flex items-center justify-between bg-orange-500 text-white font-bold px-5 py-4 rounded-2xl hover:-translate-y-0.5 transition-transform">
            <span>📋</span>
            <span className="flex-1 text-left ml-3">Solicitar contrato</span>
            <span>→</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}