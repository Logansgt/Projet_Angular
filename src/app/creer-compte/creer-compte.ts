import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {ToggleSwitch} from "primeng/toggleswitch";
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../services/users.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';

@Component({
  selector: 'app-creer-compte',
  imports: [
    Button,
    InputText,
    Password,
    ReactiveFormsModule,
    FormsModule,
    AsyncPipe,
    IconField,
    InputIcon
  ],
  templateUrl: './creer-compte.html',
  styleUrl: './creer-compte.scss',
})
export class CreerCompte implements OnInit {

  obsBienvenu$!: Observable<string>;
  afficheBvn!: string;

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

 constructor(private router: Router, private userService: UserService, private cd: ChangeDetectorRef){

 }

  onContinue(): void {
    this.router.navigateByUrl('');
  }

  creerUser(): void {
    const newUser={
      email: this.profileForm.value.email,
      pwd: this.profileForm.value.pwd,
    };
    this.userService.addUser(newUser);
    this.onContinue();
  }

  ngOnInit() {

    this.afficheBvn = "";

    this.obsBienvenu$ = new Observable<string>(observer => {
      const message = "Rejoins nous";
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

}
