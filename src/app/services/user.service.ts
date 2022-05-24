import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '.././environments/environment';
import { IUserHttp } from '../store/models/app.model';

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}data.json`;

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<IUserHttp> {
    return this._http.get<IUserHttp>(this.usersUrl);
  }
}
