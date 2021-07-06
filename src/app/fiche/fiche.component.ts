import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FicheRenseignement } from '../services/FicheRenseignement';

@Component({
  selector: 'fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent {

  @Input('fiche') ficheRenseignement!: FicheRenseignement;

  constructor(private router: Router) { }

  modifyFiche(fiche: FicheRenseignement) {
    console.log("ID de la fiche: " + fiche.id);
    this.router.navigate(['/fiche_renseignement/' + fiche.id])
  }

}
