import { Component } from '@angular/core';
import { MedicineService } from '../../Services/medicine.service';
import { Medicine } from '../../Models/medicine';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupviewComponent } from '../../../popupview/popupview.component';
import CreatemedicineComponent from '../createmedicine/createmedicine.component';


@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {

  medicines:Medicine[]=[];
  
  constructor(private medicineservice:MedicineService,private router:Router,private dialog:MatDialog){}

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
    //  alert("Are You Sure You want to Delete this Record...");
     this.router.navigate(["/medicinelist"])
   })
 }



ShowPopup(medicineId:any): void {
   this.dialog.open(PopupviewComponent, {
    width: '40%',
    data: { id: medicineId 
    }
  });

}

}





