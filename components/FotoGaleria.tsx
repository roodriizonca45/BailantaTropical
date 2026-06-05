"use client";
import Image from "next/image";
import { useState } from "react";

type Foto = { id: number; url: string; orden: number };

export function FotoGaleria({ fotos, nombre }: { fotos: Foto[]; nombre: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {fotos.map((foto) => (
          <div
            key={foto.id}
            className="relative aspect-square overflow-hidden rounded-2xl border border-white/8 cursor-pointer"
            onClick={() => setSelected(foto.url)}
          >
            <Image src={foto.url} alt={nombre} fill sizes="33vw" className="object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelected(null)}
        >
          <img src={selected} className="max-h-screen max-w-full object-contain rounded-xl p-4" />
        </div>
      )}
    </>
  );
}