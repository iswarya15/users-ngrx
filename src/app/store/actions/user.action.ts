import { Action } from '@ngrx/store';
import { IUser } from '../models/app.model';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Ger User Success',
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
  constructor() {
    console.log('GetUsers action activated!!');
  }
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  // making payload & type  public so it can be accessed in reducers
  constructor(public payload: IUser[]) {
    console.log('GetUsersSuccess Action Activated');
  }
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;

  constructor(public payload: IUser) {
    console.log('GetUserSuccess Action Activated');
  }
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
