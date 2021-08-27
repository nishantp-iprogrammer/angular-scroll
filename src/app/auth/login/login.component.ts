import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.controls.email.value === 'demo@mail.com' && this.loginForm.controls.password.value === '123456') {
      localStorage.setItem('email', this.loginForm.controls.email.value);
      this.router.navigateByUrl('/cart');
    }
  }

}
