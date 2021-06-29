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
      progres: 'Invalidé'
    }
    ,
    {
      raisonSociale: "Hardis",
      representantLegal: "Burrossauro",
      progres: 'En Cours de Traitement'
    }
    ,
    {
      raisonSociale: "Capgemini",
      representantLegal: "Nicolas Sarcozi",
      progres: 'En Cours de Traitement'
    }
    ,
    {
      raisonSociale: "Hardis",
      representantLegal: "Burrossauro",
      progres: 'Validé'
    }
    ,
    {
      raisonSociale: "Hardis",
      representantLegal: "Burrossauro",
      progres: 'En Cours de Traitement'
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
