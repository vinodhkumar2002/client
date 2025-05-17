import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MyridesService{

  constructor(private http:HttpClient) { }
  baseURl:string=environment.backendApi;

  public getAllRides(userId:number){
    return this.http.get(this.baseURl+"myRides/"+userId)
  }

  public deleteRide(rideId:number){
    return this.http.delete(this.baseURl+"deleteRide/"+rideId)
  }

  public searchRides(startingPoint:string,endingPoint:string,date:string){
    const params = new HttpParams()
    .set('startingPoint', startingPoint)
    .set('endingPoint', endingPoint)
    .set('date', date);
    return this.http.get(this.baseURl+"searchRides",{ params });
  }
  
}
