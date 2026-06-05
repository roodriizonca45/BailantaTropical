import Link from "next/link";

export default function HistoriaPage() {
  const timeline = [
    { num: "01", title: "La ETIEC los juntó sin querer", desc: "Se sentaron cerca, empezaron a joder en clase y el resto es historia. El colegio nunca supo lo que estaba incubando." },
    { num: "02", title: "La primera salida que nadie recuerda bien", desc: "Salieron juntos por primera vez. Los detalles son borrosos pero el consenso general es que fue una noche histórica." },
    { num: "03", title: "El pacto tácito del fin de semana", desc: "Nadie lo propuso formalmente pero quedó establecido: el sábado a la noche es sagrado. Trabajo, novia, familia — todo espera hasta el domingo." },
    { num: "04", title: "Hoy: cada uno con su vida, juntos el finde", desc: "Responsabilidades, laburo, obligaciones. Todo bien. Pero el grupo de WhatsApp nunca duerme y el viernes activa solo." },
  ];

  const miembros = [
    { slug: "astroboy",  iniciales: "AS", rol: "El que extraña a la ex" },
    { slug: "chewbacca", iniciales: "CH", rol: "Crack de los vomitos" },
    { slug: "guaguita",  iniciales: "GG", rol: "El de la hermana mas linda" },
    { slug: "lechita",   iniciales: "LE", rol: 'Vendedor de autos rotos"' },
    { slug: "lotoki",    iniciales: "LO", rol: "El come hermanas" },
    { slug: "pocoyo",    iniciales: "PO", rol: "come gorditas" },
    { slug: "pou",       iniciales: "PO", rol: "Desvirgador de maipu" },
    { slug: "quito",     iniciales: "QU", rol: "El come hermanas n°2" },
    { slug: "tongadiaz", iniciales: "TD", rol: "Corre maratones internacional" },
  ];

  return (
    <main className="bg-[#0d1f3c] min-h-screen text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a1628]">
        <Link href="/" className="text-white/50 text-sm font-extrabold hover:text-yellow-400">
          ← Volver
        </Link>
        <span className="font-bold text-lg" style={{ fontFamily: "Pacifico, cursive" }}>
          Bailanta <span className="text-yellow-400">Tropical</span>
        </span>
        <div className="w-12" />
      </nav>

      {/* HERO */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src="/logo.jpg"
          alt="El grupo"
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/10 to-[#0d1f3c]/97" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
          <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: "Pacifico, cursive" }}>
            La Historia <span className="text-yellow-400">Real</span>
          </h1>
          <p className="text-xs text-white/45 font-extrabold tracking-widest uppercase">
            Maipú, Mendoza · sin filtro
          </p>
        </div>
      </div>

      <div className="px-6 py-6 max-w-2xl mx-auto">

        {/* Intro */}
        <div className="border-l-4 border-yellow-400 rounded-r-2xl bg-yellow-400/6 px-5 py-5 mb-6">
          <p className="text-sm text-white/80 leading-relaxed">
            No son una banda. No son influencers. Son un grupo de pibes del secundario que un día decidieron que{" "}
            <strong className="text-yellow-400">el fin de semana es más importante que cualquier otra cosa</strong>{" "}
            y desde ahí no hubo vuelta atrás. De lunes a viernes: gente de bien. El sábado a la noche:{" "}
            <strong className="text-yellow-400">problema de Maipú.</strong>
          </p>
        </div>

        {/* Pilares */}
        <p className="text-[10px] font-black text-white/30 tracking-[3px] uppercase mb-3">Los pilares del grupo</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { title: "Bailar siempre", desc: "No importa el lugar, la música ni el estado físico. Si suena algo, se baila. Es una ley." },
            { title: "Los excesos", desc: "Bien dosificados de lunes a viernes. El fin de semana tiene su propio reglamento que nadie escribió." },
            { title: "Ser facheros", desc: "Los más lindos de Maipú. No es opinión, es un hecho documentado por ellos mismos." },
            { title: "La hermandad", desc: "Se conocieron en la ETIEC y ya no se pudieron sacar de encima. Es un vínculo irreversible." },
          ].map((p, i) => (
            <div key={i} className="bg-white/4 border border-white/8 rounded-2xl p-4">
              <h4 className="text-yellow-400 font-black text-xs uppercase tracking-wide mb-2">{p.title}</h4>
              <p className="text-white/55 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <p className="text-[10px] font-black text-white/30 tracking-[3px] uppercase mb-4">Cómo llegamos hasta acá</p>
        <div className="flex flex-col mb-6">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4 pb-6">
              <div className="flex flex-col items-center min-w-[32px]">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-[#0a1628] font-black text-xs flex-shrink-0">
                  {item.num}
                </div>
                {i < timeline.length - 1 && <div className="flex-1 w-0.5 bg-yellow-400/12 mt-1" />}
              </div>
              <div className="pt-1">
                <h3 className="font-black text-sm text-white mb-1">{item.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="bg-[#0a1628] border border-yellow-400/15 rounded-2xl px-5 py-5 mb-6">
          <p className="text-sm text-white/75 leading-relaxed italic mb-3">
            "De lunes a viernes somos personas normales con responsabilidades, compromisos y cierta reputación que mantener. El sábado a la noche somos Bailanta Tropical y eso no tiene ninguna explicación razonable."
          </p>
          <footer className="text-xs text-yellow-400 font-black tracking-wide">
            — El grupo, probablemente un domingo al mediodía con auriculares puestos
          </footer>
        </blockquote>

        {/* Miembros */}
        <p className="text-[10px] font-black text-white/30 tracking-[3px] uppercase mb-3">Los integrantes</p>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {miembros.map((m) => (
            <div key={m.slug} className="bg-white/4 border border-white/8 rounded-2xl p-3 text-center hover:border-yellow-400/35 transition-colors">
              <div className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center font-black text-[#0a1628] text-xs mx-auto mb-2">
                {m.iniciales}
              </div>
              <h5 className="text-xs font-black text-white capitalize mb-1">{m.slug}</h5>
              <span className="text-[11px] text-white/30 leading-tight block">{m.rol}</span>
            </div>
          ))}
        </div>

        {/* Aviso */}
        <div className="bg-orange-500/8 border border-orange-500/25 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/60 leading-relaxed">
            <strong className="text-orange-400">Aviso a los vecinos de Maipú:</strong>{" "}
            si los ven un fin de semana, no intenten razonar con ellos. Están en modo Bailanta Tropical y vuelven a ser personas normales recién el lunes a las 8am.
          </p>
        </div>

      </div>
    </main>
  );
}