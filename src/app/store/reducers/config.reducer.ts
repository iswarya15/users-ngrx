import { EConfigActions, ConfigActions } from '../actions/config.action';
import { IConfigState, initialConfigState } from '../states/config.state';

export const configReducers = (
  state: IConfigState = initialConfigState,
  action: ConfigActions
) => {
  console.log('ConfigReducer Invoked!!! Action =>', action);
  console.log(state);
  switch (action.type) {
    case EConfigActions.getConfigSuccess: {
      console.log('ConfigReducer is going to handle the success of the effect');
      console.log(action);
      return {
        ...state,
        config: action.payload,
      };
    }
    default:
      return state;
  }
};
