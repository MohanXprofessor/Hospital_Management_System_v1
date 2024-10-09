import { Component } from '@angular/core';
import { PatientService } from '../../Services/patient.service';
import { Patient } from '../../Models/patient';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrl: './patientlist.component.css'
})
export class PatientlistComponent {

  patients:Patient[]=[];
  constructor(private patientservice:PatientService){}


ngOnInit():void{
  this.getpatient();
}


  getpatient()
  {
    this.patientservice.getPatientslist().subscribe(data=>{
      this.patients=data;
    })
    
  }
}
