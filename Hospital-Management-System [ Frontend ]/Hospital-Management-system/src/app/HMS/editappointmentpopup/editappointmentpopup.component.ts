import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../Services/appointment.service';
import { Appointment } from '../Models/appointment';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editappointmentpopup',
  templateUrl: './editappointmentpopup.component.html',
  styleUrl: './editappointmentpopup.component.css'
})
export class EditappointmentpopupComponent implements OnInit{

    appointmentForm!: FormGroup; // Declare the form group
    appointment: Appointment;
  
    constructor(
      public dialogRef: MatDialogRef<EditappointmentpopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Appointment,
      private appointmentService: AppointmentService,
      private formBuilder: FormBuilder,private router:Router
    ) {
      this.appointment = { ...data }; // Clone the data to avoid modifying the original
    }
  
    ngOnInit(): void {
      this.initForm(); // Initialize the form when the component is loaded
    }
  
    initForm(): void {
      this.appointmentForm = this.formBuilder.group({
        a_id: [this.appointment.a_id, Validators.required],
        name: [this.appointment.name, Validators.required],
        age: [this.appointment.age, [Validators.required, Validators.min(1)]],
        symptoms: [this.appointment.symptoms, Validators.required],
        number: [this.appointment.number, [Validators.required, Validators.pattern("^[0-9]*$")]],
        valid: [this.appointment.valid]
      });
    }
  
    onSubmit(): void {
      if (this.appointmentForm.valid) {
        const updatedAppointment: Appointment = { ...this.appointment, ...this.appointmentForm.value };
  
        this.appointmentService.updateAppointment(updatedAppointment).subscribe(
          (response) => {
              this.router.navigate(['/appointmentlist']);
            console.log('Appointment updated:', response);

            this.dialogRef.close(response); // Close the dialog with the response
          },
          (error) => {
            console.error('Error updating appointment:', error);
            // Handle error (you may want to show a message to the user)
          }
        );
      } else {
        console.warn('Form is not valid');
      }
    }
  }

