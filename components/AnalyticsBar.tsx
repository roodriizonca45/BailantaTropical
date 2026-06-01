"use client";

import { useEffect, useState } from "react";

type Stats = { views: number; opens: number };

export function AnalyticsBar({ videoId }: { videoId: string }) {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch(`/api/analytics/${videoId}`, { method: "POST" }).catch(() => {});

    fetch(`/api/analytics/${videoId}`)
      .then((r) => {
        if (!r.ok) throw new Error("api error");
        return r.json();
      })
      .then((data) => setStats(data))
      .catch(() => setStats({ views: 0, opens: 0 })); // fallback silencioso
  }, [videoId]);

  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-medium text-zinc-200">Analytics</div>
          <div className="mt-1 text-xs text-zinc-400">Vistas básicas</div>
        </div>
        <div className="flex gap-4 text-right">
          <div>
            <div className="text-lg font-semibold tabular-nums text-zinc-100">
              {stats?.views ?? "—"}
            </div>
            <div className="text-[11px] text-zinc-500">vistas</div>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <div className="text-lg font-semibold tabular-nums text-zinc-100">
              {stats?.opens ?? "—"}
            </div>
            <div className="text-[11px] text-zinc-500">aperturas</div>
          </div>
        </div>
      </div>
    </div>
  );
}