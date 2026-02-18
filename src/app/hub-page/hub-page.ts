import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RouterLink,Router} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { User } from '../models/users';
import { UserService } from '../services/users.service';
import {Observable, Observer, Subscriber} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {PrimeNG} from 'primeng/config';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {Password, PasswordDirective} from 'primeng/password';

@Component({
  selector: 'app-hub-page',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, AsyncPipe, Button, InputText, PasswordDirective, Password],
  templateUrl: './hub-page.html',
  styleUrl: './hub-page.scss',
})
export class HubPage implements OnInit {

  obsBienvenu$!: Observable<string>;
  afficheBvn!: string;
  pwd!: string;

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private userService: UserService, private cd: ChangeDetectorRef, private primeng :PrimeNG) {
  }

  ngOnInit() {
    this.primeng.ripple.set(true);

    this.afficheBvn = "";

    this.obsBienvenu$ = new Observable<string>(observer => {
      const message = "HomePage";
      for (let i = 0; i < message.length; i++) {
        setTimeout(() => {
          observer.next(message[i]);
        }, (i + 1) * 100)
        setTimeout(() => {
        }, (i + 1) * 150)
      }
      setTimeout(() => {
        observer.complete();
      }, (message.length + 1) * 500)
    })

    const affichage = {
      next: (value: string) => {
        this.afficheBvn += value;
        this.cd.detectChanges();
      }
    }

    const subscriber = this.obsBienvenu$.subscribe(affichage);

  }


  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

   creerCompte(){
    this.router.navigateByUrl('creerUser');
   }

  public handleSubmit(): void {
    const pwd = this.profileForm.value.pwd;
    const email = this.profileForm.value.email;

    this.userService.getUsers().subscribe(users => { // Je subscribe pour voir les changements
      const present = users.some(u => u.pwd === pwd) && users.some(u => u.email === email); // On check juste la présence

      if (!present) {
        throw new Error("L'utilisateur n'est pas dans la base");
      } else {
        this.onContinue();
      }
    });
  }
}
