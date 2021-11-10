import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth.service';
import { User } from './core/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent implements OnInit  {
  title = 'exchange-rate-app';
  currentUser: Observable<User>;

  constructor(
    private auth: AuthService
  ) {
    this.currentUser = this.auth.currentUser();
  }

  ngOnInit(): void {
    console.log('ngOnInit...');
  }

  signout() {
    this.auth.signout();
  }
}
