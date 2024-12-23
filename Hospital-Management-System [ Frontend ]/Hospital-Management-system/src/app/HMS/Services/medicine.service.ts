import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Medicine } from '../Models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8080/hospital/api";


getmedicinelist():Observable<Medicine[]>{

  return this.http.get<Medicine[]>(`${this.baseUrl}/getallmedicine`)
}



getMedicineById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}

createmedicine(medicine:Medicine):Observable<Medicine>{
  return this.http.post<Medicine>(`${this.baseUrl}/createmedicine`,medicine)
}

 // Method to delete a patient by ID
 deleteMedicine(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/medicine/${id}`);
}



// Method to update medicine details
updateMedicine(medicine: Medicine): Observable<Medicine> {
  return this.http.put<Medicine>(`${this.baseUrl}/updatemedicine/${medicine.m_id}`, medicine);
}

}