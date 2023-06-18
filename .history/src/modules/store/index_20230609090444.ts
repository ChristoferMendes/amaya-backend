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

     writeFileSync(this.FILE, this._stringfy(data))
     console.log('hey')
    }

    private _stringfy(object: any) {
      return JSON.stringify(object)
    }

    read () {
      const data = readFileSync(this.FILE, 'utf-8')
      console.log(data)
      return JSON.parse(data) as StoreUser
    }
}

export const store = new Store()