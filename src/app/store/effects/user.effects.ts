import { Inject, Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, switchMap, map, withLatestFrom } from 'rxjs';

import { IAppState } from '../states/app.state';
import {
  GetUser,
  GetUserSuccess,
  GetUsers,
  GetUsersSuccess,
  EUserActions,
} from '../actions/user.action';
import { UserService } from '../../services/user.service';
import { IUserHttp } from '../models/app.model';
import { selectUserList } from '../selectors/user.selector';

@Injectable()
export class UserEffects {
  @Effect()
  // Set the effect action type using the ofType operator.
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map((action) => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter((user) => user.id === +id)[0];
      console.log('Invoking getUser Effect!');
      console.log('Users => ', users);
      console.log('Action dispatching for new selected User => ', selectedUser);
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers()),
    switchMap((userHttp: IUserHttp) => {
      console.log('Invoking getUsers Effects');
      console.log('UserHttp => ', userHttp);
      return of(new GetUsersSuccess(userHttp.users));
    })
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
