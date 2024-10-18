import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './HMS/navbar/navbar.component';
import { AdmindashboardComponent } from './HMS/admin/admindashboard/admindashboard.component';
import { PatientlistComponent } from './HMS/admin/patientlist/patientlist.component';
import { MedicinelistComponent } from './HMS/admin/medicinelist/medicinelist.component';
import { AppointmentlistComponent } from './HMS/admin/appointmentlist/appointmentlist.component';
import { CreatepatientComponent } from './HMS/admin/createpatient/createpatient.component';
import CreatemedicineComponent from './HMS/admin/createmedicine/createmedicine.component';
import { CreateappointmentComponent } from './HMS/admin/createappointment/createappointment.component';
import { DocdashComponent } from './HMS/docdash/docdash.component';
import { LogindocComponent } from './HMS/logindoc/logindoc.component';
import { LoginadminComponent } from './HMS/loginadmin/loginadmin.component';

const routes: Routes = [

  { path:"", component:NavbarComponent},

  // Doctor 
  { path:"docdash", component:DocdashComponent},
  { path:"patientslist", component:PatientlistComponent},
  { path:"medicinelist", component:MedicinelistComponent},

  { path:"loginadmin", component:LoginadminComponent},
  { path:"logindoc", component:LogindocComponent},


  { path:"appointmentlist", component:AppointmentlistComponent},

  
  { path:"createpatient", component:CreatepatientComponent},
  { path:"createmedicine", component:CreatemedicineComponent},
  { path:"createappointment", component:CreateappointmentComponent},

  { path:"admindash", component:AdmindashboardComponent},


  









  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
