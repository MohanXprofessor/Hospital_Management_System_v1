import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './HMS/navbar/navbar.component';
import { AdmindashboardComponent } from './HMS/admin/admindashboard/admindashboard.component';
import { PatientlistComponent } from './HMS/admin/patientlist/patientlist.component';
import { MedicinelistComponent } from './HMS/admin/medicinelist/medicinelist.component';
import { AppointmentlistComponent } from './HMS/admin/appointmentlist/appointmentlist.component';

const routes: Routes = [

  { path:"", component:NavbarComponent},



  // Admin Components 
  {path:"adminpage",component:AdmindashboardComponent},
  {path:"patientlist",component:PatientlistComponent},
  {path:"medicinepage",component:MedicinelistComponent},
  {path:"appointmentpage",component:AppointmentlistComponent},


  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
