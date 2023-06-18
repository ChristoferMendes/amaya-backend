import { fastify } from "fastify";
import { store } from "./modules/store";
import { randomUUID } from "crypto";
import { UserType } from "./schemas";

const app = fastify();

interface PostMovieBody {
  email: string
  name: string
  password: string
}


app.post<{ Body: UserType }>('/', (request) => {
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