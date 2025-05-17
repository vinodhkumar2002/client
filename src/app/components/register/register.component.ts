import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "../../models/user";  // Import the User interface
import { RegisterService } from '../../services/register.service';

import { Route, Router } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  userExists:boolean=false;

  constructor(private fb: FormBuilder,private service:RegisterService,private router:Router) {}

  ngOnInit(): void {
    // Initialize the form
    this.registerForm = this.fb.group(
      {
        userName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        mobileNumber: ['', [Validators.required, Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)]],  // Mobile number validation
      },
      {
        validators: this.passwordMatchValidator // Custom validator to check if password matches
      }
    );
  }

  // Custom password match validator
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Convenience getters for form controls
  get userName() {
    return this.registerForm.get('userName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get mobileNumber() {
    return this.registerForm.get('mobileNumber');
  }

  // Submit handler
  onSubmit(): void {
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value; // Form values mapped to the User interface
      console.log('Form Submitted:', user);
      this.service.register(user).subscribe(data=>{
        this.router.navigate(["login"]);
      },(error)=>{this.userExists=true})
      
    } else {
      console.log('Form is invalid');
      this.registerForm.markAllAsTouched(); // To show validation errors
    }
  }
}
