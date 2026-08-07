import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logoUrl: string = 'images/logo.webp';
  applicationName: string = 'AMS';
  loggedInUser: { name: string } = { name: 'Guru' };
  loggedIn: boolean = true;

  logout() {
    console.log('User Clicked Logout!');
    this.loggedIn = false;
  }

  get welcomeMessage(): string {
    return this.loggedIn ? `Welcome ${this.loggedInUser.name}!` : 'Please LogIn';
  }
}
