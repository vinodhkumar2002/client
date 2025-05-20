import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  baseUrl:String=environment.backendApi
  

  public register(user:User){
    console.log("this is the backend url"+this.baseUrl)
    return this.http.post(this.baseUrl+"register",user);
  }


}
