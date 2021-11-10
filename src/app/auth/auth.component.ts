import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    console.log('calling ngOnInit...');
  }

  submit() {
    console.log('calling submit...');
    this.auth.attempAuth({ username: this.username, password: this.password }).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        this.errorMessage = 'login failed';
        return;
      },
    );
  }
}
