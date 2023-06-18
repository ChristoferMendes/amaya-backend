import { StoreUser, User } from "./types"
import { readFileSync, writeFileSync } from "fs"
import { join } from 'path'

class Store {
    readonly FILE = join(__dirname, 'data', 'data.json')

    store (user: Partial<User>) {
      console.log(__dirname)
      console.log(this.FILE)
      const existentUsers = this.read();

      const newConfig = [...existentUsers.users, user]
      console.log(newConfig)       

      return writeFileSync('./data/data.json', this._stringfy(user))
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