
const server = Bun.serve({
  port: 8080,
  fetch(_request) {
    return new Response("Welcome to Bun!");
  }
})

console.log(`Listening on localhost: ${server.port}`);
