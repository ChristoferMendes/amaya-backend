import { join } from "path"
import { User } from "./types"
import { readFileSync, writeFileSync } from "fs"

export class Store {
    readonly DIR = join('.', 'data')
    readonly FILE = join(this.DIR, 'data.json')

    store (user: Partial<User>) {


      return writeFileSync(this.FILE, )
    }

    private _stringfy(object: Partial<User>) {
      return JSON.stringify(object)
    }
}