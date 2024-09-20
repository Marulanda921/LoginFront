import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signup(this.registerForm).subscribe(
      response => {
        console.log('Registration successful', response);
        alert('Registration successful! Please log in.');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed', error);
        alert('Registration failed: ' + (error.error?.message || 'Unknown error'));
      }
    );
  }
}