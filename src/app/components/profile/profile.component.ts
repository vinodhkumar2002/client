import { Component, Inject } from '@angular/core';
import { User } from '../../models/user';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { getFromLocalStorage } from '../../utils/storage.util';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  currentUser: User = {
    userId: null,
    userName: null,
    password: null,
    email: null,
    mobileNumber: null
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Browser environment detected');
      this.currentUser = {
        userId: null,
        userName: getFromLocalStorage('userName'),
        password: null,
        email: getFromLocalStorage('email'),
        mobileNumber: getFromLocalStorage('mobileNumber')
      };
    } else {
      console.log('Server environment detected - Skipping localStorage access');
    }
  }
}
