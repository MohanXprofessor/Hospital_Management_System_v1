import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../Services/appointment.service';
import { Appointment } from '../../Models/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrl: './appointmentlist.component.css'
})
export class AppointmentlistComponent  implements OnInit{

  appointments:Appointment[]=[];
  constructor(private appointmentservice:AppointmentService,private router:Router){}


ngOnInit():void
{
  this.getappointmentlist();
}

  getappointmentlist():void{
    this.appointmentservice.getappointmentlist().subscribe(data =>{
      this.appointments=data;
      
    } )
  }

  appointmentdelete(id:number)
  {
    this.appointmentservice.deleteAppointment(id).subscribe(data=>{
      this.getappointmentlist();
      alert("Are You Sure You want to Delete this Record...");
      this.router.navigate(["/appointmentpage"])
    })
  }

}
