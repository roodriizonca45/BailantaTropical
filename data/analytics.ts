import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function incrementView(videoId: string) {
  await redis.incr(`views:${videoId}`);
}

export async function incrementOpen(videoId: string) {
  await redis.incr(`opens:${videoId}`);
}

export async function getStats(videoId: string) {
  const [views, opens] = await redis.mget<number[]>(
    `views:${videoId}`,
    `opens:${videoId}`
  );
  return {
    views: views ?? 0,
    opens: opens ?? 0,
  };
}

export async function getAllStats(ids: string[]) {
  const keys = ids.flatMap((id) => [`views:${id}`, `opens:${id}`]);
  const values = await redis.mget<number[]>(...keys);
  return ids.map((id, i) => ({
    id,
    views: values[i * 2]  ?? 0,
    opens: values[i * 2 + 1] ?? 0,
  }));
}