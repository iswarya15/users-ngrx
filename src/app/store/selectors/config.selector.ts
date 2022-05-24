import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IConfigState } from '../states/config.state';

const configState = (state: IAppState) => state.config;

//find out the significance of 2 params in createSelector
export const selectConfig = createSelector(
  configState,
  (state: IConfigState) => {
    console.log('Inside CreateSelector');
    console.log('Retrieving current ConfigState using selector');
    return state.config;
  }
);
