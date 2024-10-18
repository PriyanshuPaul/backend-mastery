import { serve } from "bun";

serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response("Hello! Its your first server", { status: 200 });
    } else {
      return new Response("Content Not Found!", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
