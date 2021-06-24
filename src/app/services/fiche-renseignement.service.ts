import { FicheRenseignement } from './FicheRenseignement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FicheRenseignementService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getAllFiches(): Observable<FicheRenseignement[]> {
    return this.http.get<FicheRenseignement[]>(`${this.apiServerUrl}/fiche_renseignement/`);
  }

  getFiche(idFiche: number): Observable<FicheRenseignement> {
    return this.http.get<FicheRenseignement>(`${this.apiServerUrl}/fiche_renseignement/${idFiche}`);
  }

  getLastFiche(): Observable<FicheRenseignement> {
    return this.http.get<FicheRenseignement>(`${this.apiServerUrl}/fiche_renseignement/last_fiche_renseignement`);
  }

  addFiche(fiche: FicheRenseignement): Observable<FicheRenseignement> {
    return this.http.post<FicheRenseignement>(`${this.apiServerUrl}/fiche_renseignement/add/${fiche.id}`, fiche);
  }

  updateFiche(fiche: FicheRenseignement) {
    return this.http.put<FicheRenseignement>(`${this.apiServerUrl}/fiche_renseignement/update/${fiche.id}`, fiche);
  }

  deleteFiche(fiche: FicheRenseignement) {
    return this.http.delete<void>(`${this.apiServerUrl}/fiche_renseignement/delete/${fiche.id}`);
  }
}
