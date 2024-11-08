import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MedicineService } from '../Services/medicine.service';

import { Medicine } from '../Models/medicine';

@Component({
  selector: 'app-editmedicinepopup',
  templateUrl: './editmedicinepopup.component.html',
  styleUrl: './editmedicinepopup.component.css'
})
export class EditmedicinepopupComponent {

  medicine: Medicine;

  constructor(
      public dialogRef: MatDialogRef<EditmedicinepopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Medicine,
      private medicineService: MedicineService
  ) {
      this.medicine = { ...data }; // Clone the data to avoid modifying the original
  }

  onSubmit() {
      this.medicineService.updateMedicine(this.medicine).subscribe({
          next: (response) => {
              console.log('Medicine updated successfully:', response);
              this.dialogRef.close(response); // Close the dialog and pass the updated data
          },
          error: (error) => {
              console.error('Error updating medicine:', error);
          }
      });
  }
}
