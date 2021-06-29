import { FicheRenseignementService } from './../services/fiche-renseignement.service';
import { FicheRenseignement } from './../services/FicheRenseignement';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Utilisateur } from '../services/Utilisateur';

@Component({
  selector: 'create-fiche',
  templateUrl: './create-fiche.component.html',
  styleUrls: ['./create-fiche.component.scss']
})
export class CreateFicheComponent implements OnInit {

  id!: number;
  loggedUser$!: Observable<firebase.User | null>;
  fiche$!: Observable<FicheRenseignement>;

  constructor(private route: ActivatedRoute,
              private ficheRService: FicheRenseignementService,
              public userAuthService: AuthService)
  {
    this.loggedUser$ = userAuthService.getLoggedUser();
  }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    this.id = Number(params.get('id'));
    this.fiche$ = this.ficheRService.getFiche(this.id);
  }

  ficheRenseignementForm = new FormGroup({
    ficheEtudiant: new FormGroup({
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
    })
  });

  get nomEtudiant() {
    return this.ficheRenseignementForm.get('ficheEtudiant.nomEtudiant');
  }

  get prenomEtudiant() {
    return this.ficheRenseignementForm.get('ficheEtudiant.prenomEtudiant');
  }

  get telEtudiant() {
    return this.ficheRenseignementForm.get('ficheEtudiant.telEtudiant');
  }

  get mailEtudiant() {
    return this.ficheRenseignementForm.get('ficheEtudiant.mailEtudiant');
  }

  get adresseEtudiant() {
    return this.ficheRenseignementForm.get('ficheEtudiant.adresseEtudiant');
  }

  get villeEtudiant() {
    return this.ficheRenseignementForm.get('ficheEtudiant.villeEtudiant');
  }

  get paysEtudiant() {
    return this.ficheRenseignementForm.get('ficheEtudiant.paysEtudiant');
  }

  get numeroEtudiant() {
    return this.ficheRenseignementForm.get('ficheEtudiant.numeroEtudiant');
  }

  get typeAffiliation() {
    return this.ficheRenseignementForm.get('ficheEtudiant.typeAffiliation');
  }

  get caisseAssuranceMaladie() {
    return this.ficheRenseignementForm.get('ficheEtudiant.caisseAssuranceMaladie');
  }

  get inscription() {
    return this.ficheRenseignementForm.get('ficheEtudiant.inscription');
  }

  get enseignantReferent() {
    return this.ficheRenseignementForm.get('ficheEtudiant.enseignantReferent');
  }



}
