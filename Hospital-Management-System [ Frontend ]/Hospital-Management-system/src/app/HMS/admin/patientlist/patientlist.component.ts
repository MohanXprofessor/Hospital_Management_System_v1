import { Component, Inject } from '@angular/core';
import { PatientService } from '../../Services/patient.service';
import { Patient } from '../../Models/patient';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PatientviewpopupComponent } from '../../patientviewpopup/patientviewpopup.component';
import { EditpatientpopupComponent } from '../../editpatientpopup/editpatientpopup.component';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrl: './patientlist.component.css'
})
export class PatientlistComponent {

  patients:Patient[]=[];

  constructor(private dialog:MatDialog,private patientservice:PatientService,private router:Router){}


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
      // alert("Are You Sure You want to Delete this Record...");
      this.router.navigate(["/patientslist"])
    })
  }

  patientsedit(id:number)
  {

  }


  ShowpatientsPopup(patientId:any): void {
    this.dialog.open(PatientviewpopupComponent, {
     width: '30%',
     data: { id: patientId 
     }
   });
 
 }


 
 ShoweditpatientsPopup(patient:any): void {
    const dialogRef = this.dialog.open(EditpatientpopupComponent, {
        width: '400px',
        data: patient // Pass the medicine data to the dialog
    });
  
  }

}
