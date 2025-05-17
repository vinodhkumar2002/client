import { Component } from '@angular/core';
import { User } from '../../models/user';
import { getFromLocalStorage } from '../../utils/storage.util';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  currentUser:User={
    userId: null,
    userName: getFromLocalStorage('userName'),
    password: null,
    email: getFromLocalStorage('email'),
    mobileNumber: getFromLocalStorage('mobileNumber')
  }
constructor(){}


}
