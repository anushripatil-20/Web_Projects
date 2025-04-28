import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule] 
})
export class LoginComponent {

  constructor(private router: Router) {}

  // user_records: any[] = [];
  logindata = {
    email: "",
    password: ""
  };

  login() {
    const storeuser = JSON.parse(localStorage.getItem('user')||'{}');

    if (storeuser.email === this.logindata.email && storeuser.password === this.logindata.password) {
      alert("Login Successful!!");
      this.router.navigate(['/']);
    } else {
      alert("Login Failed");
    }
  }
}
