import pool from "@/lib/db";

export type Person = {
  id: number;
  slug: string;
  name: string;
  description: string;
  photo_url: string;
  video_url: string;
  has_video: boolean;
};

export async function getAllPeople(): Promise<Person[]> {
  const result = await pool.query(
    "SELECT * FROM personas ORDER BY id ASC"
  );
  return result.rows;
}

export async function getPersonBySlug(slug: string): Promise<Person | null> {
  const result = await pool.query(
    "SELECT * FROM personas WHERE slug = $1",
    [slug]
  );
  return result.rows[0] ?? null;
}

export function getPhotoUrl(slug: string, photo_url?: string) {
  return photo_url ?? `/${slug}/imagenes/foto.jpg`;
}

export function getVideoUrl(slug: string, video_url?: string) {
  return video_url ?? `/${slug}/videos/video.mp4`;
}