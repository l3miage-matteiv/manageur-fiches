import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Etudiant } from './Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  getAllUtilisateurs(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiServerUrl}/etudiant/`);
  }

  getEtudiant(idEtudiant: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiServerUrl}/etudiant/${idEtudiant}`);
  }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.apiServerUrl}/etudiant/add/${etudiant.id}`, etudiant);
  }

  updateEtudiant(etudiant: Etudiant) {
    return this.http.put<Etudiant>(`${this.apiServerUrl}/etudiant/update/${etudiant.id}`, etudiant);
  }

  deleteEtudiant(etudiant: Etudiant) {
    return this.http.delete<void>(`${this.apiServerUrl}/etudiant/delete/${etudiant.id}`);
  }
}
