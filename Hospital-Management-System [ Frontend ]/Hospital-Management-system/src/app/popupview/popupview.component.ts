import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicineService } from '../HMS/Services/medicine.service';
import { Medicine } from '../HMS/Models/medicine';


@Component({
  selector: 'app-popupview',
  templateUrl: './popupview.component.html',
  styleUrl: './popupview.component.css'
})
export class PopupviewComponent implements OnInit{

  medicine!: Medicine; // Changed type to Medicine

  constructor(
    private medicineService: MedicineService,
    @Inject(MAT_DIALOG_DATA) public data: any  // Inject the data passed into the dialog
  ) {}

  ngOnInit() {
   
      this.getMedicineById(this.data.id);
    
  }

  getMedicineById(id: number): void {
    this.medicineService.getMedicineById(id).subscribe(
      (data:Medicine) => {
        this.medicine = data;  // Store the fetched medicine details
      },
      (error) => {
        console.error('Error fetching medicine details:', error);
      }
    );
  }

}
