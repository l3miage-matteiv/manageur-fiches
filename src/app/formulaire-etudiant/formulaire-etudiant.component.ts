import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Etudiant } from '../services/Etudiant';

@Component({
  selector: 'formulaire-etudiant',
  templateUrl: './formulaire-etudiant.component.html',
  styleUrls: ['./formulaire-etudiant.component.scss']
})
export class FormulaireEtudiantComponent implements OnInit {

  @Input('etudiant') etudiant$!: Observable<Etudiant | null>;

  constructor() { }

  ngOnInit(): void {
    this.etudiant$.subscribe(etudiant => console.log(etudiant) )
  }

  formulaireEtudiant = new FormGroup({
    nomEtudiant: new FormControl('', [
      Validators.required
    ]),
    prenomEtudiant: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    telEtudiant: new FormControl('', [
      Validators.required
    ]),
    mailEtudiant : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    adresseEtudiant : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    villeEtudiant : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    paysEtudiant : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    numeroEtudiant : new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    typeAffiliation : new FormControl('', [
      Validators.required
    ]),
    caisseAssuranceMaladie : new FormControl('', [
      Validators.required
    ]),
    inscription : new FormControl('', [
      Validators.required
    ]),
    enseignantReferent : new FormControl('', [
      Validators.required
    ])
  });

  get nomEtudiant() {
    return this.formulaireEtudiant.get('nomEtudiant');
  }

  get prenomEtudiant() {
    return this.formulaireEtudiant.get('prenomEtudiant');
  }

  get telEtudiant() {
    return this.formulaireEtudiant.get('telEtudiant');
  }

  get mailEtudiant() {
    return this.formulaireEtudiant.get('mailEtudiant');
  }

  get adresseEtudiant() {
    return this.formulaireEtudiant.get('adresseEtudiant');
  }

  get villeEtudiant() {
    return this.formulaireEtudiant.get('villeEtudiant');
  }

  get paysEtudiant() {
    return this.formulaireEtudiant.get('paysEtudiant');
  }

  get numeroEtudiant() {
    return this.formulaireEtudiant.get('numeroEtudiant');
  }

  get typeAffiliation() {
    return this.formulaireEtudiant.get('typeAffiliation');
  }

  get caisseAssuranceMaladie() {
    return this.formulaireEtudiant.get('caisseAssuranceMaladie');
  }

  get inscription() {
    return this.formulaireEtudiant.get('inscription');
  }

  get enseignantReferent() {
    return this.formulaireEtudiant.get('enseignantReferent');
  }
}
