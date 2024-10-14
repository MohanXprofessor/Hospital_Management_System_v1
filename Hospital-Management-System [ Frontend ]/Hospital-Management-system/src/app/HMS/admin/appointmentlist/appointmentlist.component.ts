import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../Services/appointment.service';
import { Appointment } from '../../Models/appointment';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrl: './appointmentlist.component.css'
})
export class AppointmentlistComponent  implements OnInit{

  appointments:Appointment[]=[];
  constructor(private appointmentservice:AppointmentService){}


ngOnInit():void
{
  this.getappointmentlist();
}

  getappointmentlist():void{
    this.appointmentservice.getappointmentlist().subscribe(data =>{
      this.appointments=data;
      
    } )
  }

}
