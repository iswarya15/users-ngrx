import { Action } from '@ngrx/store';
import { IConfig } from '../models/app.model';

export enum EConfigActions {
  getConfig = '[Config] Get Config',
  getConfigSuccess = '[Config] Get Config Success',
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.getConfig;

  constructor() {
    console.log('GetConfig Action Invoked');
  }
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.getConfigSuccess;
  constructor(public payload: IConfig) {
    console.log('GetConfigSuccess action Activated!! ');
    console.log('Action payload', payload);
  }
}

export type ConfigActions = GetConfig | GetConfigSuccess;
