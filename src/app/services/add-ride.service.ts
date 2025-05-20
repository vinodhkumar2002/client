import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RideDetails } from '../models/ride-details';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddRideService {

  constructor(private http:HttpClient) { }

  baseUrl:string=environment.backendApi;


  public addRide(rideDetails:RideDetails){
    console.log(rideDetails)
    return this.http.post(this.baseUrl+"rideDetails",rideDetails);
  }
}
