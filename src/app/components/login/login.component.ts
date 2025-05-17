import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { error } from 'node:console';
import { removeFromLocalStorage, setToLocalStorage } from '../../utils/storage.util';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  invalidCredentials:boolean=false;

  constructor(private fb: FormBuilder,private service:LoginServiceService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],  // Email or Username
      password: ['', [Validators.required, Validators.minLength(6)]]  // Password
    });
  }

  // Convenience getters for form controls
  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    removeFromLocalStorage('token');
    if (this.loginForm.valid) {
      console.log('Login Successful', this.loginForm.value);
      this.service.login(this.loginForm.value).subscribe((data:any)=>{
        console.log(data);
        setToLocalStorage('token',data.token);
        setToLocalStorage('userId',data.currentUser.userId);
        setToLocalStorage('userName',data.currentUser.userName);
        setToLocalStorage('email',data.currentUser.email);
        setToLocalStorage('mobileNumber',data.currentUser.mobileNumber);

        this.router.navigate(["home"]);

      },(error)=>this.invalidCredentials=true)
    } else {
      console.log('Form is invalid');
      this.loginForm.markAllAsTouched();  // Show validation errors
    }
  }
}
