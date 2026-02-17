import { Component } from '@angular/core';
import {RouterLink,Router} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { User } from '../models/users';
import { UserService } from '../services/users.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hub-page',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './hub-page.html',
  styleUrl: './hub-page.scss',
})
export class HubPage {

  users!: Observable<User[]>;


  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private router: Router, private userService: UserService) {
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  public handleSubmit(): void {
    const email = this.profileForm.value.email;

    this.userService.getUsers().subscribe(users => { // Je subscribe pour voir les changements
      const present = users.some(u => u.email === email); // On check juste la présence

      if (!present) {
        throw new Error("L'utilisateur n'est pas dans la base");
      } else {
        this.onContinue();
      }
    });
  }
}
