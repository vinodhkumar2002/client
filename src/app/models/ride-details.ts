import { User } from "./user";

export interface RideDetails {
    rideId:number;
    carModel: string;
    carNumber: string;
    licenseNumber: string;
    
    startingPoint: string;
    endingPoint: string;
    
    date: string;          // Format: yyyy-MM-dd
    journeyTime: string;   // Format: HH:mm:ss
    user?:any;
  }
  