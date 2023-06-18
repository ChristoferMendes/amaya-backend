import { join } from "path"
import { User } from "./types"

export class Store {
    readonly DIR = join('.', 'data')
    readonly FILE = join(this.DIR, 'data.json')

    store (user: Partial<User>) {

    }
}