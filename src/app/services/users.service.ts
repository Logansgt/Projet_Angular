import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { nom: 'Dupont', email: 'Dupont@gmail.com'},
    { nom: 'Logan', email: 'saget.logan@gmail.com'},
  ];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users); // of pour retourner un obj observable
  }
}
