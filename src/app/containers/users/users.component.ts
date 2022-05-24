import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/states/app.state';
import { selectUserList } from '../../store/selectors/user.selector';
import { GetUsers } from '../../store/actions/user.action';
import { Router } from '@angular/router';
@Component({
  selector: '',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));
  // Injecting the store in users component
  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    // dispatch action to get users
    this._store.dispatch(new GetUsers());
  }
  // event
  navigateToUser(id: any) {
    this._router.navigate(['user', id]);
  }
}
