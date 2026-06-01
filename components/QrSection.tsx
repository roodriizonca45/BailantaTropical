"use client";

import { useEffect, useMemo, useState } from "react";

export function QrSection({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const pageUrl = useMemo(() => {
    // En producción reemplazar por NEXT_PUBLIC_SITE_URL si aplica.
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/videos/${videoId}`;
  }, [videoId]);

  useEffect(() => {
  setImgUrl(`/api/qr/${videoId}?from=qr&t=${Date.now()}`);
}, [videoId]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
    } catch {
      // fallback
      const input = document.createElement("input");
      input.value = pageUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
  }


  function downloadQr() {
    if (!imgUrl) return;
    const a = document.createElement("a");
    a.href = imgUrl;
    a.download = `qr-${title.replace(/\s+/g, "-").toLowerCase()}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div className="glass rounded-3xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold">QR premium</div>
          <div className="mt-1 text-xs text-zinc-400">
            Apunta a <span className="text-zinc-300">/videos/{videoId}</span>
          </div>
        </div>
        <button
          onClick={copyLink}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 transition hover:bg-white/10"
        >
          Copiar link
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
          {imgUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imgUrl} alt={`QR para ${title}`} className="h-auto w-56 max-w-full" />
          ) : (
            <div className="h-56 w-56 animate-pulse bg-white/5" />
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        <button
          onClick={downloadQr}
          className="rounded-2xl bg-warm-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_12px_40px_rgba(255,122,44,.35)] transition hover:bg-warm-400"
        >
          Descargar QR (PNG)
        </button>
        <button
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10"
          onClick={() => {
            window.open(imgUrl ?? "", "_blank");
          }}
        >
          Ver imagen
        </button>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3">
        <div className="text-xs font-medium text-zinc-200">Analytics</div>
        <div className="mt-1 text-xs text-zinc-400">
          Se registran vistas básicas al abrir esta página.
        </div>
      </div>
    </div>
  );
}

