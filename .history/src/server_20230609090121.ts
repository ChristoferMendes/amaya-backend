import { fastify } from "fastify";
import { store } from "./modules/store";
import { randomUUID } from "crypto";
import { User, UserType } from "./schemas";

const app = fastify();

app.post<{ Body: UserType }>('/', {
  schema: {
    body: User
  }
},(request) => {
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