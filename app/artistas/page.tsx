import Link from "next/link";
import { getAllPeople, getPhotoUrl } from "@/data/people";

export default async function ArtistasPage() {
  const people = await getAllPeople();

  return (
    <main className="bg-[#0d1f3c] min-h-screen text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a1628]">
        <Link href="/bienvenida" className="text-white/50 text-sm font-extrabold hover:text-yellow-400">
          ← Volver
        </Link>
        <span className="font-bold text-lg" style={{ fontFamily: "Pacifico, cursive" }}>
          Bailanta <span className="text-yellow-400">Tropical</span>
        </span>
        <div className="w-12" />
      </nav>

      <div className="px-6 py-8 max-w-2xl mx-auto">
        <div className="mb-8">
          <p className="text-[10px] font-black text-white/30 tracking-[3px] uppercase mb-1">Maipú, Mendoza</p>
          <h1 className="text-3xl font-bold" style={{ fontFamily: "Pacifico, cursive" }}>
            Nuestros <span className="text-yellow-400">Artistas</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {people.map((person) => (
            <Link
              key={person.id}
              href={`/perfil/${person.slug}`}
              className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition-colors group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={getPhotoUrl(person.slug, person.photo_url)}
                  alt={person.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/80 to-transparent" />
              </div>
              <div className="p-3">
                <h2 className="font-black text-sm text-white capitalize mb-1">{person.name || person.slug}</h2>
                {person.description && (
                  <p className="text-[11px] text-white/40 leading-relaxed line-clamp-2">{person.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}