import { Component, VERSION, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store/states/app.state';
import { GetConfig } from './store/actions/config.action';
import { GetUsers } from './store/actions/user.action';
import { selectConfig } from './store/selectors/config.selector';
import { selectUserList } from './store/selectors/user.selector';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular-ngrx';
  config$ = this._store.pipe(select(selectConfig));
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    console.log('Dispatching GetConfig Action!!!');
    this._store.dispatch(new GetConfig());
    this._store.dispatch(new GetUsers());
    console.log('Config$ => ', this.config$);
    console.log('USers$ =>', this.users$);
  }
}
