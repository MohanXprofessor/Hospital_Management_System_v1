import { Component } from '@angular/core';
import { PatientService } from '../../Services/patient.service';
import { Patient } from '../../Models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrl: './patientlist.component.css'
})
export class PatientlistComponent {

  patients:Patient[]=[];
  constructor(private patientservice:PatientService,private router:Router){}


ngOnInit():void{
  this.getpatient();
}


  getpatient()
  {
    this.patientservice.getPatientslist().subscribe(data=>{
      this.patients=data;
    })
    
  }


  patientsdelete(id:number)
  {
    this.patientservice.deletePatients(id).subscribe(data=>{
      this.getpatient();
      alert("Are You Sure You want to Delete this Record...");
      this.router.navigate(["/patientlist"])
    })
  }
}
