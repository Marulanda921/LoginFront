import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = {
    email: '',
    password: ''
  };
  rememberMe: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.authService.removeToken();
  }

  onSubmit() {
    this.authService.login(this.loginForm).subscribe(
      response => {
        if (response.token) {
          console.log('Login successful');
          if (this.rememberMe) {

            localStorage.setItem('token', response.token);
          } else {
            // Si no, guarda el token en sessionStorage
            sessionStorage.setItem('token', response.token);
          }
 
          this.router.navigate(['/crud']);
        } else {
          console.log('Login failed', response.message);

          alert('Login failed: ' + response.message);
        }
      },
      error => {
        console.error('Login failed', error);

        alert('Login failed: ' + (error.error?.message || 'Unknown error'));
      }
    );
  }

  forgotPassword() {
    console.log('Forgot password clicked');
  }
}
