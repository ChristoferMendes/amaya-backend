import { StoreUser, User } from "./types"
import { readFileSync, writeFileSync } from "fs"
import { join } from 'path'

class Store {
    readonly FILE = join(__dirname, 'data', 'data.json')

    create (user: Partial<User>) {
      const existentUsers = this.read();
      console.log(existentUsers)

      const newRegistry = [
        ...existentUsers.users,
        user
      ]

      const data = {
        users: newRegistry
      }
      console.log(data)

      return writeFileSync(this.FILE, this._stringfy(data))
    }

    private _stringfy(object: any) {
      return JSON.stringify(object)
    }

    read () {
      const data = readFileSync(this.FILE, 'utf-8')
      return JSON.parse(data) as StoreUser
    }
}

export const store = new Store()