import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";
import { getPersonBySlug } from "@/data/people";

export const runtime = "nodejs";

function getSiteOrigin(req: NextRequest): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  const host  = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (host) return `${proto}://${host}`;
  return "http://localhost:3030";
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const person = await getPersonBySlug(id);
  if (!person) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }


  const origin  = getSiteOrigin(req);
  const fromQr  = req.nextUrl.searchParams.get("from") === "qr";
  const pageUrl = `${origin}/perfil/${id}${fromQr ? "?from=qr" : ""}`;

  const pngBuffer = await QRCode.toBuffer(pageUrl, {
    type: "png",
    errorCorrectionLevel: "M",
    margin: 2,
    width: 560,
    color: { dark: "#0d0500", light: "#ffffff" },
  });

  return new NextResponse(pngBuffer as unknown as BodyInit, {
    headers: {
      "Content-Type":  "image/png",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}