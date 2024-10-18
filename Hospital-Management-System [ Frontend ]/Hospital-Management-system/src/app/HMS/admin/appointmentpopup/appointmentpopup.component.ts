import { Component, Inject, OnInit } from '@angular/core';
import { Appointment } from '../../Models/appointment';
import { AppointmentService } from '../../Services/appointment.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-appointmentpopup',
  templateUrl: './appointmentpopup.component.html',
  styleUrl: './appointmentpopup.component.css'
})
export class AppointmentpopupComponent implements OnInit{

  appointment!: Appointment; // Changed type to Medicine

  constructor(
    private appointmentService: AppointmentService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }  // Inject the appointment ID passed to the dialog
  ) {}

  ngOnInit(): void {
    this.getAppointmentById(this.data.id);
  }

  getAppointmentById(id: number): void {
    this.appointmentService.getAppointmentById(id).subscribe(
      (data: Appointment) => {
        this.appointment = data;  // Store the fetched appointment details
      },
      (error) => {
        console.error('Error fetching appointment details:', error);
      }
    );
  }
}
