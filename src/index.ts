import Fastify from "fastify";

const fastify = Fastify();

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

fastify.get("/test", async (request, reply) => {
  const result = doWork(10);
  reply.send(`Result ${result}`);
});

fastify.listen({ port: 8080, host: "0.0.0.0" }, (error, address) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log(`Started server at ${address}`);
});
