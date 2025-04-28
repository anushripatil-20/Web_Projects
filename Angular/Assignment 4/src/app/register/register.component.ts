import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule] 
})
export class RegisterComponent {

  user = {
    name: "",
    email: "",
    city: "",
    age: "",
    contact: "",
    password: ""
  };

  constructor(private router: Router) {}

  register() {
     localStorage.setItem('user',JSON.stringify(this.user));
     alert("Registration Sucessfull");
     this.router.navigate(['/login']);
  }
}
