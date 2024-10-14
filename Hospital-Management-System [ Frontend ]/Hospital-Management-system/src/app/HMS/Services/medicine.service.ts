import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

createmedicine(medicine:Medicine):Observable<Medicine>{
  return this.http.post<Medicine>(`${this.baseUrl}/createmedicine`,medicine)
}


}
