import { IUser } from '../models/app.model';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null,
};
