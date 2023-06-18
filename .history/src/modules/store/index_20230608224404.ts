import { StoreUser, User } from "./types"
import { readFileSync, writeFileSync } from "fs"
import { join } from 'path'

class Store {
    readonly FILE = join(__dirname, 'data', 'data.json')

    store (user: Partial<User>) {
      const existentUsers = this.read();
      console.log(existentUsers)

      const data = {
        users: [user]
      }

      return writeFileSync(this.FILE, this._stringfy(data))
    }

    private _stringfy(object: any extends object) {
      return JSON.stringify(object)
    }

    read () {
      const data = readFileSync(this.FILE, 'utf-8')
      return JSON.parse(data) as StoreUser
    }
}

export const store = new Store()