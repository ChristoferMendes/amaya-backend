import { StoreUser, User } from "./types"
import { readFileSync, writeFileSync } from "fs"
import path from 'path'

class Store {
    readonly FILE = path.resolve('./data/data.json')

    store (user: Partial<User>) {
      console.log(this.FILE)
      const existentUsers = this.read();

      console.log(newConfig)       
      const newConfig = [...existentUsers.users, user]

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

export const store = new Store()