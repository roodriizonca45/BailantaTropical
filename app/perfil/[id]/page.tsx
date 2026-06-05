import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { getPersonBySlug, getPhotoUrl, getVideoUrl, getFotosBySlug, getVideosBySlug } from "@/data/people";
import { QrSection } from "@/components/QrSection";
import { AnalyticsBar } from "@/components/AnalyticsBar";
import { FotoGaleria } from "@/components/FotoGaleria";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const person = await getPersonBySlug(id);
  if (!person) return {};
  return {
    title: `${person.name} — Bailanta Tropical`,
    description: person.description,
    openGraph: {
      title: person.name,
      description: person.description,
      images: [{ url: getPhotoUrl(person.slug, person.photo_url), width: 1200, height: 630 }],
    },
  };
}

export default async function PerfilPage({ params, searchParams }: Props) {
  const { id }   = await params;
  const { from } = await searchParams;
  const person   = await getPersonBySlug(id);
  if (!person) return notFound();

  const fromQr   = from === "qr";
  const videoUrl = getVideoUrl(person.slug, person.video_url);
  const photoUrl = getPhotoUrl(person.slug, person.photo_url);

  const fotos  = await getFotosBySlug(person.slug);
  const videos = await getVideosBySlug(person.slug);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-14 pt-6 sm:pt-10">

      <Link href="/artistas" className="inline-flex items-center gap-1.5 text-xs text-zinc-500 transition hover:text-zinc-300">
        ← Volver
      </Link>

      {/* Header del perfil */}
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-48 sm:w-48">
          <Image src={photoUrl} alt={person.name} fill sizes="192px" className="object-cover" priority />
        </div>
        <div className="flex flex-col justify-center">
          {fromQr && (
            <span className="mb-2 inline-flex w-fit rounded-full bg-warm-500/15 px-3 py-0.5 text-xs text-warm-300">
              Llegaste por QR
            </span>
          )}
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{person.name}</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">{person.description}</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
              {fotos.length} foto{fotos.length !== 1 ? "s" : ""}
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
              {videos.length} video{videos.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Galería de fotos */}
      {fotos.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xs font-black text-white/30 tracking-[3px] uppercase mb-4">Fotos</h2>
            <FotoGaleria fotos={fotos} nombre={person.name} />
        </section>
      )}

      {/* Videos */}
      <section className="mt-10">
        <h2 className="text-xs font-black text-white/30 tracking-[3px] uppercase mb-4">Videos</h2>
        {videos.length > 0 ? (
          <div className="flex flex-col gap-6">
            {videos.map((video, i) => (
              <div key={video.id} className="glass overflow-hidden rounded-3xl">
                <video
                  src={video.url}
                  controls
                  autoPlay={fromQr && i === 0}
                  muted={fromQr}
                  playsInline
                  className="w-full max-h-[80vh] object-contain"
                  poster={photoUrl}
                >
                  Tu navegador no soporta video HTML5.
                </video>
                <div className="px-5 py-4">
                  <div className="text-sm font-medium text-zinc-100">{person.name}</div>
                  <div className="mt-0.5 text-xs text-zinc-500">Video {i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass flex aspect-video items-center justify-center rounded-3xl">
            <div className="text-center">
              <div className="text-4xl">🎬</div>
              <div className="mt-3 text-sm text-zinc-400">Video próximamente</div>
            </div>
          </div>
        )}
      </section>

      {/* Analytics y QR */}
      <section className="mt-8 grid gap-4 lg:grid-cols-[1fr_340px]">
        <AnalyticsBar videoId={person.slug} />
        <aside>
          <QrSection videoId={person.slug} title={person.name} />
        </aside>
      </section>

    </main>
  );
}