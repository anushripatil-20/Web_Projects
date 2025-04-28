
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Fixed styleUrls instead of styleUrl
})
export class NavbarComponent {

  constructor(private router: Router) {}

  
  goToLogin() {
    this.router.navigate(['/login']);
  }

  
  goToRegister() {
    this.router.navigate(['/register']);
  }

  
  goToShowUsers() {
    this.router.navigate(['/']);
  }
}

