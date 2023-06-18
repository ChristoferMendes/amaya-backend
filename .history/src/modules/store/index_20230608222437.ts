import { join } from "path"

export class Store {
    readonly DIR = join('.', 'data')
    readonly FILE = join(this.DIR, 'data.json')
}