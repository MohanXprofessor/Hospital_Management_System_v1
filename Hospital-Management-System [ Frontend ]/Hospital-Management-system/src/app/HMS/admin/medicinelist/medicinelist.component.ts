import { Component } from '@angular/core';
import { MedicineService } from '../../Services/medicine.service';
import { Medicine } from '../../Models/medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {

  medicines:Medicine[]=[];
  
  constructor(private medicineservice:MedicineService,private router:Router){}

 ngOnInit():void
 {
  this.getmedicinelist();
 }

 getmedicinelist(){
  this.medicineservice.getmedicinelist().subscribe(data=>{
    this.medicines=data;
  })
 }

 medicinedelete(id:number)
 {
   this.medicineservice.deleteMedicine(id).subscribe(data=>{
     this.getmedicinelist();
     alert("Are You Sure You want to Delete this Record...");
     this.router.navigate(["/medicinepage"])
   })
 }

}
