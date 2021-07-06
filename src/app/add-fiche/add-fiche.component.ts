import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FicheComponent } from '../fiche/fiche.component';
import { AuthService } from '../services/auth.service';
import { Etudiant } from '../services/Etudiant';
import { Fiche } from '../services/Fiche';
import { FicheRenseignementService } from '../services/fiche-renseignement.service';
import { FicheRenseignement } from '../services/FicheRenseignement';
import { FichesService } from '../services/fiches.service';
import { Utilisateur } from '../services/Utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.scss']
})
export class AddFicheComponent {

  public ficheRenseignement$!: Observable<FicheRenseignement>;
  public ficheRenseignement!: FicheRenseignement;

  public lastFicheRenseignement!: FicheRenseignement;
  public nextFicheID!: number;

  fiches$!: Observable<FicheRenseignement[]>;
  currentUtilisateur$!: Observable<Utilisateur>;
  currentUtilisateur!: Utilisateur;

  constructor(public dialogRef: MatDialogRef<AddFicheComponent>,
              private fichesService: FichesService,
              private ficheRenseignementService: FicheRenseignementService,
              private authService: AuthService,
              private utilisateurService: UtilisateursService) {
    this.ficheRenseignementService.getLastFiche()
      .subscribe(fiche => {
        this.lastFicheRenseignement = fiche;
        this.nextFicheID = fiche.id + 1;
      })
      authService.getLoggedUser()
        .subscribe(user => {
          this.currentUtilisateur$ = this.utilisateurService.getUtilisateurByMail(user?.email);
          this.currentUtilisateur$
            .subscribe(utilisateur => {
              this.currentUtilisateur = utilisateur;
            })
          });
  }

  ficheForm = new FormGroup({
    fiche: new FormGroup({
      raisonSociale: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      representantLegal: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      recruiterEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      hrServiceEmail : new FormControl('', [
        Validators.email
      ]),
      teacherEmail : new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  })

  get raisonSociale() {
    return this.ficheForm.get('fiche.raisonSociale');
  }

  get representantLegal() {
    return this.ficheForm.get('fiche.representantLegal');
  }

  get recruiterEmail() {
    return this.ficheForm.get('fiche.recruiterEmail');
  }

  get hrServiceEmail() {
    return this.ficheForm.get('fiche.hrServiceEmail');
  }

  get teacherEmail() {
    return this.ficheForm.get('fiche.teacherEmail');
  }

  createNewFiche() {
    const etu: Etudiant = {
      id: this.currentUtilisateur.id,
      nom: this.currentUtilisateur.nom,
      prenom: this.currentUtilisateur.prenom,
      tel: '788971741',
      mail: 'viniciuspmattei@gmail.com',
      adresse: '1015 Avenue des Jeux Olympiques',
      codePostal: "38100",
      ville: 'Grenoble',
      pays: 'France',
      numeroEtudiant: 11715704,
      typeAffiliation: 'Étudiant',
      caisseAssuranceMaladie: 'CPAM',
      inscription: 'L3 MIAGE',
      enseignantReferent: 'Laurence Pierre',
      typeUtilisateur: this.currentUtilisateur.typeUtilisateur
    }

    // creer fiche de renseignement

    this.ficheRenseignement = {
      id: this.nextFicheID,
      idetudiant: etu.id,
      mailServiceRH: this.hrServiceEmail?.value,
      mailTuteur: this.recruiterEmail?.value,
      mailEnseignant: this.teacherEmail?.value,
      idserviceRH: 3,
      idtuteur: 2,
      idenseignant: 1,
      idficheAccueilStagiaire: 0,
      idficheTuteur: 0,
      raisonSociale: this.raisonSociale?.value,
      representantLegal: this.representantLegal?.value,
      progres: "En Cours de Traitement"
    };

    // notifier serviceRH, tuteur et enseignant par mail de la creation de la fiche
    console.log(this.ficheRenseignement);
    this.ficheRenseignement$ = this.ficheRenseignementService.addFiche(this.ficheRenseignement);
    this.ficheRenseignement$
      .subscribe(fiche => {
        console.log(fiche);
      });
      this.dialogRef.close();

    // amener l'utilisateur a la remplissage de la fiche de renseignement

  }

  closeWindow(): void {
    this.dialogRef.close();
  }
}
