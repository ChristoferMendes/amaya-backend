import { fastify } from "fastify";
import { store } from "./modules/store";
import { randomUUID } from "crypto";
import { User, UserLogin, UserLoginType, UserType } from "./schemas";

const app = fastify();

app.post<{ Body: UserType }>(
  "/register",
  {
    schema: {
      body: User,
    },
  },
  (request, reply) => {
    const { email, name, password } = request.body;

    const data = store.create({
      uuid: randomUUID(),
      email,
      name,
      password,
    });

    if (!data) {
      return reply
        .status(409)
        .send({ message: "User already exists", type: "email" });
    }

    return data;
  }
);

app.post<{ Body: UserLoginType }>(
  "/login",
  {
    schema: {
      body: UserLogin,
    },
  },
  (request, reply) => {
    const { email, password } = request.body;

    const user = store.findByEmail(email);

    if (!user) {
      return reply.status(401).send({
        message: "Email not found, you may register first",
        type: "email",
      });
    }

    const userLogin = store.login(user.email, password);

    if (!userLogin) {
      return reply
        .status(401)
        .send({ message: "Invalid credentials", type: "password" });
    }

    return reply.status(200).send(userLogin);
  }
);

app.listen({ port: 3333 }, (e) => {
  if (e) console.log(e);

  return console.log("Server is running on port 3333");
});
