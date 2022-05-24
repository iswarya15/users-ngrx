import { EUserActions, UserActions } from '../actions/user.action';
import { IUserState, initialUserState } from '../states/user.state';

export const userReducers = (
  state: IUserState = initialUserState,
  action: UserActions
) => {
  console.log('Invoking userReducers: Action!!! => ', action);
  console.log('State ', state);
  switch (
    action.type //this type can be found in action class desc(readonly property)
  ) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload,
      };
    }
    default:
      return state;
  }
};
