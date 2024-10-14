import { Component } from '@angular/core';
import { MedicineService } from '../../Services/medicine.service';
import { Medicine } from '../../Models/medicine';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {

  medicines:Medicine[]=[];
  
  constructor(private medicineservice:MedicineService){}

 ngOnInit():void
 {
  this.getmedicinelist();
 }

 getmedicinelist(){
  this.medicineservice.getmedicinelist().subscribe(data=>{
    this.medicines=data;
  })
 }

}
