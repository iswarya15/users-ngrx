import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
  EConfigActions,
  GetConfig,
  GetConfigSuccess,
} from '../actions/config.action';
import { switchMap, of } from 'rxjs';
import { ConfigService } from '../../services/config.service';
import { IConfig } from '../models/app.model';

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this._actions.pipe(
    ofType<GetConfig>(EConfigActions.getConfig),
    switchMap(() => this._configService.getConfig()),
    switchMap((config: IConfig) => {
      console.log('Inside ConfigEffects!!');
      console.log('Invoking effect for getConfig');
      console.log('Retrieving config from configService =>', config);
      return of(new GetConfigSuccess(config));
    })
  );

  constructor(
    private _configService: ConfigService,
    private _actions: Actions
  ) {}
}
