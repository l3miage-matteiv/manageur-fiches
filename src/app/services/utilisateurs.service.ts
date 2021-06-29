import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Utilisateur } from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiServerUrl}/utilisateur/`);
  }

  getUtilisateur(idUtilisateur: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiServerUrl}/utilisateur/${idUtilisateur}`);
  }

  getUtilisateurByMail(mailUtilisateur: string | null | undefined): Observable<Utilisateur | null> {
    return this.http.get<Utilisateur>(`${this.apiServerUrl}/utilisateur/mail/${mailUtilisateur}`);
  }

  getLastUtilisateur(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiServerUrl}/utilisateur/last_utilisateur`);
  }

  addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/utilisateur/add/${utilisateur.id}`, utilisateur);
  }

  updateUtilisateur(utilisateur: Utilisateur) {
    return this.http.put<Utilisateur>(`${this.apiServerUrl}/utilisateur/update/${utilisateur.id}`, utilisateur);
  }

  deleteUtilisateur(utilisateur: Utilisateur) {
    return this.http.delete<void>(`${this.apiServerUrl}/utilisateur/delete/${utilisateur.id}`);
  }
}
