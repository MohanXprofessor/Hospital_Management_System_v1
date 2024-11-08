import { Component } from '@angular/core';
import { MedicineService } from '../../Services/medicine.service';
import { Medicine } from '../../Models/medicine';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupviewComponent } from '../../../popupview/popupview.component';
import CreatemedicineComponent from '../createmedicine/createmedicine.component';
import { EditmedicinepopupComponent } from '../../editmedicinepopup/editmedicinepopup.component';
import { Observable } from 'rxjs';
import { EditappointmentpopupComponent } from '../../editappointmentpopup/editappointmentpopup.component';


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


editmedicinePopup(medicine:Medicine): void {
  const dialogRef = this.dialog.open(EditmedicinepopupComponent, {
      width: '400px',
      data: medicine // Pass the medicine data to the dialog
  });

  dialogRef.afterClosed().subscribe(result => {
      if (result) {
          // Update the local medicines array if needed
          const index = this.medicines.findIndex(m => m.m_id === result.m_id);
          if (index !== -1) {
              this.medicines[index] = result; // Update the medicine in the list
          }
      }
  });
}



}





