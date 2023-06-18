import { StoreUser, User } from "./types";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { exec } from "child_process";
import { prisma } from "../../../prisma/prisma";

class Store {
  readonly FILE = "./data/data.json";

  create(user: Omit<User, "id">) {
    const userCreated = prisma.user.create({ data: user });
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
