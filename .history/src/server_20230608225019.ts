import { fastify } from "fastify";
import { store } from "./modules/store";
import { randomUUID } from "crypto";

const app = fastify();

app.route({
  method: 'POST',
  url: '/',
  schema: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string' }
    }
  },
  handler: (request) => {
    const { email, name, password } = request.body

    store.create({
      uuid: randomUUID(),
      email,
      name,
      password,
    })

    return store.read()
  }
});

app.listen({ port: 3000 }, () => console.log('Server is running on port 3000'));