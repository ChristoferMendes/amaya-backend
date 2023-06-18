import { fastify } from "fastify";
import { store } from "./modules/store";

const app = fastify();

app.post('/', async (request, reply) => {
  store.store({ uuid: '1', email: 'asdasd', name: 'dasdasdsa', password: 'asdasdsa' })

  return { hello: 'word' }
});

app.listen({ port: 3000 }, () => console.log('Server is running on port 3000'));