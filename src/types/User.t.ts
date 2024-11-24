export interface IAddUser {
  email: string;
  name: string;
  role: string;
  password: string;
}

export interface IUser {
  name: string;
  username: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
