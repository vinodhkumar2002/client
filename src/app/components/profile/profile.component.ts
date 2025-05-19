import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { User } from '../../models/user';
import { getFromLocalStorage } from '../../utils/storage.util';
import { isPlatformBrowser } from '@angular/common';

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
    console.log('ProfileComponent: Initializing...');

    if (isPlatformBrowser(this.platformId)) {
      console.log('ProfileComponent: Running in browser context');
      try {
        this.currentUser = {
          userId: null,
          userName: getFromLocalStorage('userName'),
          password: null,
          email: getFromLocalStorage('email'),
          mobileNumber: getFromLocalStorage('mobileNumber')
        };
        console.log('ProfileComponent: User data loaded:', this.currentUser);
      } catch (error) {
        console.error('ProfileComponent: Error accessing localStorage:', error);
      }
    } else {
      console.warn('ProfileComponent: Running in server context - localStorage not accessible');
    }
  }
}
