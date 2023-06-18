import { StoreUser, User } from "./types"
import { readFileSync, writeFileSync } from "fs"
import { join } from 'path'

class Store {
  readonly FILE = join(__dirname, 'data', 'data.json')

  create(user: User) {
    const existentUsers = this.read();
    
    if (this._emailIsUnique(user.email)) {
      return;
    }
    

    const newRegistry = [
      ...existentUsers.users,
      user
    ]

    const data = {
      users: newRegistry
    }

    writeFileSync(this.FILE, this._stringfy(data))

    return data;
  }


  login (email: string, password: string) {
    const data = this.read();
    const user = data.users.find(user => user.email === email && user.password === password)

    return user;
  
  }

  private _stringfy(object: any) {
    return JSON.stringify(object)
  }

  private _emailIsUnique (email: string) {
    const existentUsers = this.read();
    const existentEmail = existentUsers.users.some(user => user.email === email)

    console.log(existentEmail)
    return existentEmail;
  }

  read() {
    const data = readFileSync(this.FILE, 'utf-8')

    if (!data) {
      return {
        users: []
      }
    }

    return JSON.parse(data) as StoreUser
  }
}

export const store = new Store()