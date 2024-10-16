import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../Models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8080/hospital/api";


  getappointmentlist():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.baseUrl}/getallappointment`)
  }

  createappointment(appointment:Appointment):Observable<Appointment>{
    return this.http.post<Appointment>(`${this.baseUrl}/createappointment`,appointment)
  }

   // Method to delete a patient by ID
   deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/appointment/${id}`);
  }
}
