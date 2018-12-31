import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get user(): Observable<User> {
    return this.userSubject.asObservable();
  }
  private userSubject = new BehaviorSubject<User>(null);

  constructor() { }

  login(username: string, password: string) {
    this.userSubject.next({ username: username, email: username });
  }
  logout() {
    this.userSubject.next(null);
  }
}
