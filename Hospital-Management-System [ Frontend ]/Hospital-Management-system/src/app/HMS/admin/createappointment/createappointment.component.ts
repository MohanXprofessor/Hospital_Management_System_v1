import { Component } from '@angular/core';
import { Appointment } from '../../Models/appointment';
import { AppointmentService } from '../../Services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createappointment',
  templateUrl: './createappointment.component.html',
  styleUrl: './createappointment.component.css'
})
export class CreateappointmentComponent {

appointments:Appointment=new Appointment();

constructor(private appointmentservice:AppointmentService,private router:Router){}
  onSubmit(){
this.saveappointment();
  }

  saveappointment(){
    this.appointmentservice.createappointment(this.appointments).subscribe(data => {
      alert("Save Appointment....");
      this.router.navigate(['/appointmentpage']);
    })
  }

 
}
