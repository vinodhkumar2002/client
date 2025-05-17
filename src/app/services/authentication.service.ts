import { Injectable } from '@angular/core';
import { getFromLocalStorage } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  getToken(): string | null {
    return getFromLocalStorage('jwt_token');  // Modify based on where you store the token
  }
}
