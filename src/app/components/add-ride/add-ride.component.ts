import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddRideService } from '../../services/add-ride.service';
import { User } from '../../models/user';
import { RideDetails } from '../../models/ride-details';
import { getFromLocalStorage } from '../../utils/storage.util';

@Component({
  selector: 'app-add-ride',
  standalone: false,
  templateUrl: './add-ride.component.html',
  styleUrl: './add-ride.component.css'
})
export class AddRideComponent implements OnInit{
  rideForm: FormGroup;
  status!:boolean;
  userId?:number;
  minDate: string = '';
 userName:any=getFromLocalStorage("userName");
 rideDetails!:RideDetails;

  constructor(private fb: FormBuilder ,private service:AddRideService) {
    this.rideForm = this.fb.group({
     carModel: ['', Validators.required],
      carNumber: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      startingPoint: ['', Validators.required],
      endingPoint: ['', Validators.required],
      date:['',Validators.required],
      journeyTime:['',Validators.required]
    });
  }
  ngOnInit(): void {
   this.status=false;
   const today = new Date();
   this.minDate = today.toISOString().split('T')[0];
   this.userId=Number(getFromLocalStorage("userId"))
   

   
  }
  
  
  
  
  onSubmit() {
    if (this.rideForm.valid) {
      console.log('Form Submitted:', this.rideForm.value);
      
      
     
      this.rideDetails=this.rideForm.value;
      this.rideDetails.user={userId:this.userId}
  

      
    
      
      console.log("rideDetails",this.rideDetails)
      
      this.service.addRide(this.rideDetails).subscribe((data:any)=>{
        this.status=true;
        
      })
    } else {
      console.log('Form is invalid');
    }
  }


}
