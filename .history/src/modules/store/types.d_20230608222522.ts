export interface User {
  uuid: string;
  name: string | undefined;
  email: string;
  password: string;

}

export interface Store {
  users: User[]
}