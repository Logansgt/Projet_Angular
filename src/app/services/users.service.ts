import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private users$: User[] = [
    { email: 'saget.logan@gmail.com', pwd: 'Test123_'},
  ];

  private nbUsers =  this.users$.length;

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users$); // of pour retourner un obj observable
  }

  getnbUsers(): number{
    return this.nbUsers;
  }

  addUser(user: { email: string | null | undefined; pwd: string | null | undefined }) {
    this.users$.push(<User>user);
  }
}
