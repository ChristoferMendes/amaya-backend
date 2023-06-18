import { fastify } from "fastify";
import { store } from "./modules/store";
import { randomUUID } from "crypto";

const app = fastify();

interface PostMovieBody {
  properties: {
    email: string
    name: string
    password: string
  }
}

app.post<{ Body: typeof PostMovieBody['properties'] }>('/', (request) => {
  const { email, name, password } = request.body

  store.create({
    uuid: randomUUID(),
    email,
    name,
    password,
  })

  return store.read()
})

app.listen({ port: 3000 }, () => console.log('Server is running on port 3000'));