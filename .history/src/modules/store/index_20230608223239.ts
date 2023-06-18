import { join } from "path"
import { StoreUser, User } from "./types"
import { readFileSync, writeFileSync } from "fs"

export class Store {
    readonly DIR = join('.', 'data')
    readonly FILE = join(this.DIR, 'data.json')

    store (user: Partial<User>) {
      const existentUsers = this.read();

      const newConfig = [...existentUsers.users, user]
      console.log(newConfig)       

      return writeFileSync(this.FILE, this._stringfy(user))
    }

    private _stringfy(object: Partial<User>) {
      return JSON.stringify(object)
    }

    read () {
      const data = readFileSync(this.FILE, 'utf-8')
      return JSON.parse(data) as StoreUser
    }
}