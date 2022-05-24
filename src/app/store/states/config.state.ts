import { IConfig } from '../models/app.model';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null,
};
