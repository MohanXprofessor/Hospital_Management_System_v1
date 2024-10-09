import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Models/patient';

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


}
