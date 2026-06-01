import Link from "next/link";
import Image from "next/image";
import { getAllPeople, getPhotoUrl } from "@/data/people";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const people = await getAllPeople();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:pt-10">
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200">
          <span className="h-2 w-2 rounded-full bg-warm-500 shadow-[0_0_20px_rgba(255,122,44,.65)]" />
          Bailanta Tropical · {people.length} artistas
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Seleccioná un artista
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Cada perfil tiene su foto, descripción, video y código QR descargable.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <Link
            key={person.slug}
            href={`/perfil/${person.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-warm-500/40 hover:-translate-y-0.5"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={getPhotoUrl(person.slug, person.photo_url)}
                alt={person.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute left-3 top-3">
                {person.has_video ? (
                  <span className="flex items-center gap-1.5 rounded-full bg-warm-500/90 px-3 py-1 text-xs font-medium text-zinc-950 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-950" />
                    Video disponible
                  </span>
                ) : (
                  <span className="rounded-full bg-black/50 px-3 py-1 text-xs text-zinc-400 backdrop-blur-sm">
                    Próximamente
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 left-4">
                <h2 className="text-lg font-semibold text-zinc-50">
                  {person.name}
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
              <p className="line-clamp-1 text-sm text-zinc-400">
                {person.description}
              </p>
              <span className="ml-3 shrink-0 text-sm text-warm-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}