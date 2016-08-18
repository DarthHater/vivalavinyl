import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  template: `<div class="login jumbotron center-block">
              <h1>Login</h1>
              <form role="form" (submit)="login($event, username.value, password.value)">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" #username class="form-control" id="username" placeholder="Username">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" #password class="form-control" id="password" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
                <a [routerLink]="['/signup']">Click here to Signup</a>
            </form>
            </div>
            `
})

export class LoginComponent {
  constructor( private userService: UserService, private router: Router) {}

  onSubmit(email, password) {
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }
}