import { Fiche } from './Fiche';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FichesService {

  _fiches: Fiche[] = [
    {
      raisonSociale: "Orange",
      representantLegal: "Lula",
      progress: 'Invalidé'
    }
    ,
    {
      raisonSociale: "Hardis",
      representantLegal: "Burrossauro",
      progress: 'En Cours de Traitement'
    }
    ,
    {
      raisonSociale: "Capgemini",
      representantLegal: "Nicolas Sarcozi",
      progress: 'En Cours de Traitement'
    }
    ,
    {
      raisonSociale: "Hardis",
      representantLegal: "Burrossauro",
      progress: 'Validé'
    }
    ,
    {
      raisonSociale: "Hardis",
      representantLegal: "Burrossauro",
      progress: 'En Cours de Traitement'
    }
  ];

  get fiches() {
    return this._fiches;
  }

  addFiche(f: Fiche) {
    this._fiches.push(f);
  }

  constructor() { }
}
