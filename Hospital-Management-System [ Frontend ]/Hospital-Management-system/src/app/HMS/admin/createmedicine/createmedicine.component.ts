import { Component } from '@angular/core';
import { Medicine } from '../../Models/medicine';
import { MedicineService } from '../../Services/medicine.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createmedicine',
  templateUrl: './createmedicine.component.html',
  styleUrl: './createmedicine.component.css'
})
export default class CreatemedicineComponent {

medicines:Medicine=new Medicine();

constructor(private medicineservice:MedicineService,private router:Router){}


onSubmit(){
this.savemedicine();

}

savemedicine(){
  
    // confirm("Medicine Save...");
    
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your service to save data to the database
        this.medicineservice.createmedicine(this.medicines).subscribe(
          (response) => {
            Swal.fire("Saved!", "Medicine saved.", "success");
            this.router.navigate(['/medicinelist']);
          },
          (error) => {
            Swal.fire("Error!", "An error occurred while saving Medicine.", "error");
          }
        );
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  }}