import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FicheComponent } from '../fiche/fiche.component';
import { Etudiant } from '../services/Etudiant';
import { Fiche } from '../services/Fiche';
import { FicheRenseignement } from '../services/FicheRenseignement';
import { FichesService } from '../services/fiches.service';

@Component({
  selector: 'add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.scss']
})
export class AddFicheComponent {

  private ficheRenseignement: FicheRenseignement | null = null;
  private ficheAffichage: Fiche | null = null;

  constructor(public dialogRef: MatDialogRef<AddFicheComponent>,
              private fichesService: FichesService) { }

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
      id: 0,
      nom: 'Mattei',
      prenom: 'Vinicius',
      tel: 788971741,
      mail: 'viniciuspmattei@gmail.com',
      adresse: {
        adresse: '1015 Avenue des Jeux Olympiques',
        codePostal: 38100,
        ville: 'Grenoble',
        pays: 'France'
      },
      numeroEtudiant: 11715704,
      typeAffiliation: 'Étudiant',
      caisseAssuranceMaladie: 'CPAM',
      inscription: 'L3 MIAGE',
      enseignantReferent: 'Laurence Pierre',
      typeUtilisateur: 'Étudiant'
    }

    // creer fiche de renseignement

    this.ficheRenseignement= {
      id: 0,
      etudiant: etu,
      mailServiceRH: this.hrServiceEmail?.value,
      mailTuteur: this.recruiterEmail?.value,
      mailEnseignant: this.teacherEmail?.value,
      serviceRH: undefined,
      tuteur: undefined,
      enseignant: undefined,
      ficheAccueilStagiaire: undefined,
      ficheTuteur: undefined
    };

    // notifier serviceRH, tuteur et enseignant par mail de la creation de la fiche

    // ajouter et afficher une fiche dans l'accueil
    this.ficheAffichage = {
      raisonSociale: this.raisonSociale?.value,
      representantLegal: this.representantLegal?.value,
      progress: "En Cours de Traitement"
    };
    this.fichesService.addFiche(this.ficheAffichage);
    // amener l'utilisateur a la remplissage de la fichede renseignement

    // this.defiService.addDefis(this!.defis).subscribe(defi => console.log(defi));
    // this.motsClesService.addMotsCles(this!.motsCles).subscribe(motcles => console.log(motcles));
    console.log("New Fiche Added!")
    this.dialogRef.close();
  }

  closeWindow(): void {
    this.dialogRef.close();
  }
}
