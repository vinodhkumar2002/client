import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  baseUrl:String=environment.backendApi;

  public login(user:User){
    return this.http.post(this.baseUrl+"login",user);
  }

  
  
}
