import { Component, Inject } from '@angular/core';
import { Patient } from '../Models/patient';
import { PatientService } from '../Services/patient.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editpatientpopup',
  templateUrl: './editpatientpopup.component.html',
  styleUrl: './editpatientpopup.component.css'
})
export class EditpatientpopupComponent {

  patient: Patient; // Renamed from `patients` to `patient` for clarity

  constructor(
      public dialogRef: MatDialogRef<EditpatientpopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Patient,
      private patientService: PatientService
  ) {
      this.patient = { ...data }; // Clone data to avoid modifying the original
  }

  onSubmit() {
    // Ensure correct method in service is used for updating a single patient
    this.patientService.updatePatients(this.patient).subscribe({
      next: (response) => {
          console.log('Patient updated successfully:', response);
          this.dialogRef.close(response); // Close dialog and pass updated data
      },
      error: (error) => {
          console.error('Error updating patient:', error);
      }
    });
  }
}
