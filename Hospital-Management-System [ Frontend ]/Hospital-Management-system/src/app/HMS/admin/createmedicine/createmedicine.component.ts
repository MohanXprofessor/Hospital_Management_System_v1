import { Component } from '@angular/core';
import { Medicine } from '../../Models/medicine';
import { MedicineService } from '../../Services/medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createmedicine',
  templateUrl: './createmedicine.component.html',
  styleUrl: './createmedicine.component.css'
})
export class CreatemedicineComponent {

medicines:Medicine=new Medicine();

constructor(private medicineservice:MedicineService,private router:Router){}


onSubmit(){
this.savemedicine();

}

savemedicine(){
  this.medicineservice.createmedicine(this.medicines).subscribe(data=>{
    
    confirm("Medicine Save...");

    this.gotomedicine();


  })
}

gotomedicine()
{
  this.router.navigate(['/medicinepage']);
}





  
}
