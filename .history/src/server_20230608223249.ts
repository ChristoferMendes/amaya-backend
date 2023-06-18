import { fastify } from "fastify";

const app = fastify({ logger: true });

app.post('/', async (request, reply) => {
  return { hello: 'world' }
});

app.listen({ port: 3000 }, () => console.log('Server is running on port 3000'));