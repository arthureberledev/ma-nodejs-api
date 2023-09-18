import { serve } from "@hono/node-server";
import { Hono } from "hono";

function doWork(permutations: number): number {
  let count = 0;
  for (let i = 0; i < permutations; i++) {
    for (let j = 0; j < permutations; j++) {
      for (let k = 0; k < permutations; k++) {
        for (let l = 0; l < permutations; l++) {
          count++;
        }
      }
    }
  }
  return count;
}

const app = new Hono();

app.get("/test", (ctx) => {
  const result = doWork(10);
  return ctx.text(`Result ${result}`);
});

serve(app);
