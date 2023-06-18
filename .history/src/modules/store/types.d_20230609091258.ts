export interface User {
  uuid: string;
  name: string;
  email: string;
  password: string;

}

export interface StoreUser {
  users: User[]
}