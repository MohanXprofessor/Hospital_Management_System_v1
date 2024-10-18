import { Component } from '@angular/core';
import { Appointment } from '../../Models/appointment';
import { Patient } from '../../Models/patient';
import { PatientService } from '../../Services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrl: './createpatient.component.css'
})
export class CreatepatientComponent {

  patients:Patient=new Patient();

  constructor(private patientservice:PatientService,private router:Router){}


  savepatients(){
    this.patientservice.createpatient(this.patients).subscribe(data=>{
      console.log(data)
      // confirm("Save Patient..");
    this.gotopatients();
    })
  }
  onSubmit() {
    
      this.savepatients();
    }
  
  gotopatients()
  {
    this.router.navigate(["/patientslist"]);
  }
}
