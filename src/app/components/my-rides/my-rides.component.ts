import { Component, OnInit } from '@angular/core';
import { MyridesService } from '../../services/myrides.service';
import { RideDetails } from '../../models/ride-details';
import { getFromLocalStorage } from '../../utils/storage.util';

@Component({
  selector: 'app-my-rides',
  standalone: false,
  templateUrl: './my-rides.component.html',
  styleUrl: './my-rides.component.css'
})
export class MyRidesComponent implements OnInit{
  userId:number=Number(getFromLocalStorage('userId'));
  constructor(private service:MyridesService){}
  viewRides:RideDetails[]=[];
  ngOnInit(): void {
    this.getAllRides();
  }

  public getAllRides(){
    return this.service.getAllRides(this.userId).subscribe((data:any)=>{
      this.viewRides=data;
    })
  }

  public deleteRide(rideId:number){
    return this.service.deleteRide(rideId).subscribe((data:any)=>{
      this.getAllRides();
    })
  }

  

}
