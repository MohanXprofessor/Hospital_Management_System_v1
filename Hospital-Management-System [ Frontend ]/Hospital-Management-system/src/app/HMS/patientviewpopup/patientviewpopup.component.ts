import { Component, Inject, OnInit } from '@angular/core';
import { PatientService } from '../Services/patient.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../Models/patient';

@Component({
  selector: 'app-patientviewpopup',
  templateUrl: './patientviewpopup.component.html',
  styleUrl: './patientviewpopup.component.css'
})
export class PatientviewpopupComponent implements OnInit{
  patient!: Patient; // Changed type to Medicine

  constructor(
    private patientService:PatientService,
    @Inject(MAT_DIALOG_DATA) public data: any  // Inject the data passed into the dialog
  ) {}

  ngOnInit() {
   
      this.getPatientsById(this.data.id);
    
  }

  getPatientsById(id: number): void {
    this.patientService.getPatientsById(id).subscribe(
      (data:Patient) => {
        this.patient = data;  // Store the fetched medicine details
      },
      (error) => {
        console.error('Error fetching medicine details:', error);
      }
    );
  }
}
