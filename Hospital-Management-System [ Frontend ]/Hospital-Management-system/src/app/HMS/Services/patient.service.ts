import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Models/patient';
import { Appointment } from '../Models/appointment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8080/hospital/api";



  // Patients List Logic 
  getPatientslist():Observable<Patient[]>{

    return this.http.get<Patient[]>(`${this.baseUrl}/getallpatients`)
  }

  // CREATE Patient Logic 
  createpatient(patient:Patient):Observable<Patient>{
    return this.http.post<Patient>(`${this.baseUrl}/createpatient`,patient)
  }

  // Method to delete a patient by ID
  deletePatients(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/patients/${id}`);
  }

  getPatientsById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/patients/${id}`);
  }



  // Method to update Patient details
updatePatients(Patient: Patient): Observable<Patient> {
  return this.http.put<Patient>(`${this.baseUrl}/updatepatient/${Patient.p_id}`, Patient);
}
}
