import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../Services/appointment.service';
import { Appointment } from '../../Models/appointment';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentpopupComponent } from '../appointmentpopup/appointmentpopup.component';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrl: './appointmentlist.component.css'
})
export class AppointmentlistComponent  implements OnInit{

  appointments:Appointment[]=[];
  constructor(private dialog:MatDialog,private appointmentservice:AppointmentService,private router:Router){}


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
      this.router.navigate(["/appointmentlist"])
    })
  }

  ShowappointmentPopup(appointmentId:any): void {
    this.dialog.open(AppointmentpopupComponent, {
     width: '30%',
     data: { id: appointmentId 
     }
   });
 
 }

}
