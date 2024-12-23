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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreatepatientComponent } from './HMS/admin/createpatient/createpatient.component';
import CreatemedicineComponent from './HMS/admin/createmedicine/createmedicine.component';
import { CreateappointmentComponent } from './HMS/admin/createappointment/createappointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupviewComponent } from './popupview/popupview.component';
import { MpopupeditComponent } from './mpopupedit/mpopupedit.component';
import { CarouselComponent } from './HMS/carousel/carousel.component';
import { DocdashComponent } from './HMS/docdash/docdash.component';
import { LogindocComponent } from './HMS/logindoc/logindoc.component';
import { LoginadminComponent } from './HMS/loginadmin/loginadmin.component';
import { PatientviewpopupComponent } from './HMS/patientviewpopup/patientviewpopup.component';
import { AppointmentpopupComponent } from './HMS/admin/appointmentpopup/appointmentpopup.component';
import { EditmedicinepopupComponent } from './HMS/editmedicinepopup/editmedicinepopup.component';
import { EditpatientpopupComponent } from './HMS/editpatientpopup/editpatientpopup.component';
import { EditappointmentpopupComponent } from './HMS/editappointmentpopup/editappointmentpopup.component';
import {  MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


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
    CreateappointmentComponent,
    PopupviewComponent,
    MpopupeditComponent,
    CarouselComponent,
    DocdashComponent,
    LogindocComponent,
    LoginadminComponent,
    PatientviewpopupComponent,
    AppointmentpopupComponent,
    EditmedicinepopupComponent,
    EditpatientpopupComponent,
    EditappointmentpopupComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
    
    
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide:MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue:{appearance:'outline'},
    }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
