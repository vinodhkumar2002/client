import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyridesService } from '../../services/myrides.service';

@Component({
  selector: 'app-join-ride',
  standalone: false,
  templateUrl: './join-ride.component.html',
  styleUrl: './join-ride.component.css'
})
export class JoinRideComponent {

  joinRideForm!: FormGroup;
  rides: any[] = [];
  searched:boolean=false;
  profileViewed:boolean=false;

  profile:any=null;

  
  constructor(private fb: FormBuilder, private http: HttpClient,private service:MyridesService) {}
  
  ngOnInit() {
    this.joinRideForm = this.fb.group({
      startingPoint: [''],
      endingPoint: [''],
      date: ['']
    });
  }
  
  onSubmit() {
    
    const { startingPoint, endingPoint, date } = this.joinRideForm.value;
    console.log(this.joinRideForm.value);
    this.service.searchRides(startingPoint, endingPoint, date).subscribe((data:any)=>{
      this.rides=data;
      
      this.searched=true;

    })

    
   
  }

  viewProfile(index:number){
    this.profile=this.rides[index].user
    this.profileViewed=true;
    console.log(this.profile)
    
  }

  close(){
    this.profileViewed=false;
  }
}
