import { NextRequest, NextResponse } from "next/server";
import { incrementView, incrementOpen, getStats } from "../../../../data/analytics";
import { getPersonBySlug } from "@/data/people";

export const runtime = "edge"; // Redis REST es compatible con Edge

export async function POST(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const person = await getPersonBySlug(id);
  if (!person) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await Promise.all([incrementView(id), incrementOpen(id)]);
  return NextResponse.json({ ok: true });
}

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const person = await getPersonBySlug(id);
  if (!person) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const stats = await getStats(id);
  return NextResponse.json(stats, {
    headers: { "Cache-Control": "no-store" },
  });
}