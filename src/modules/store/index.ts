import { User } from "./types";
import { prisma } from "../../../prisma/prisma";

class Store {
  readonly FILE = "./data/data.json";

  async create(user: Omit<User, "id">) {
    const userAlreadyExists = await this.findByEmail(user.email);

    if (userAlreadyExists) return;

    const userCreated = await prisma.user.create({ data: user });
    return userCreated;
  }

  async login(email: string, password: string) {
    const userLoggedIn = await this.findByEmail(email);

    if (userLoggedIn?.password !== password) return;

    return userLoggedIn;
  }

  read() {
    return prisma.user.findMany();
  }

  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }
}

export const store = new Store();
