import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IUserState } from '../states/user.state';

// AppState -> { users: IUser[], config: IConfig}
const selectUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => {
    console.log('Is this the pure function in selectors? ');
    console.log('Current state of SelectedUserList =>', state);
    return state.users;
  }
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: IUserState) => {
    console.log('Returning selected User => ', state.selectedUser);
    return state.selectedUser;
  }
);
