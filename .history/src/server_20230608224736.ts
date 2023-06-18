import { fastify } from "fastify";
import { store } from "./modules/store";
import { randomUUID } from "crypto";

const app = fastify();

app.post('/', async (request, reply) => {
  const { email, name, password} = request.body

  store.create({ uuid: randomUUID(), email: 'asdasd', name: 'dasdasdsa', password: 'asdasdsa' })

  return store.read()
});

app.listen({ port: 3000 }, () => console.log('Server is running on port 3000'));