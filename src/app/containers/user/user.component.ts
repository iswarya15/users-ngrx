import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '../../store/states/app.state';
import { selectSelectedUser } from '../../store/selectors/user.selector';
import { GetUser } from '../../store/actions/user.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));
  constructor(private _store: Store, private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._store.dispatch(new GetUser(this._activatedRoute.snapshot.params.id));
  }
}
