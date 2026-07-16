import { Hono } from "hono";
import { corpus } from "@stratum/data";

const app = new Hono();

// Health check endpoint
app.get("/api/health", (c) => {
  return c.json({ ok: true });
});

// Demo endpoint to verify @stratum/data shared package loading
app.get("/api/topics", (c) => {
  return c.json({
    corpusName: corpus.name,
    topicsCount: corpus.topics.length,
    topics: corpus.topics
  });
});

console.log(`[Server] Stratum API Server running on port 3000`);
console.log(`[Server] Loaded corpus: "${corpus.name}" with ${corpus.topics.length} topics.`);

export default {
  port: 3000,
  fetch: app.fetch,
};
