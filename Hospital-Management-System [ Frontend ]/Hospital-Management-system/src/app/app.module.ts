import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './HMS/navbar/navbar.component';
import { AdmindashboardComponent } from './HMS/admin/admindashboard/admindashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientlistComponent } from './HMS/admin/patientlist/patientlist.component';
import { MedicinelistComponent } from './HMS/admin/medicinelist/medicinelist.component';
import { AppointmentlistComponent } from './HMS/admin/appointmentlist/appointmentlist.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreatepatientComponent } from './HMS/admin/createpatient/createpatient.component';
import { CreatemedicineComponent } from './HMS/admin/createmedicine/createmedicine.component';
import { CreateappointmentComponent } from './HMS/admin/createappointment/createappointment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdmindashboardComponent,
    PatientlistComponent,
    MedicinelistComponent,
    AppointmentlistComponent,
    CreatepatientComponent,
    CreatemedicineComponent,
    CreateappointmentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
