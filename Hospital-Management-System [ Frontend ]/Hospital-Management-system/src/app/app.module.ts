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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdmindashboardComponent,
    PatientlistComponent,
    MedicinelistComponent,
    AppointmentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
