import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Utilisateur } from '../services/Utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';
import { Router } from '@angular/router';
import { Enseignant } from '../services/Enseignant';
import { Etudiant } from '../services/Etudiant';
import { ServiceRH } from '../services/ServiceRH';
import { Tuteur } from '../services/Tuteur';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  dataIconGoogle = 'assets/images/iconGoogle.png';

  currentUser$!: Observable<firebase.User | null>;
  currentUser!: firebase.User | null;
  currentUtilisateur$!: Observable<Utilisateur>;
  currentUtilisateur!: Utilisateur;
  lastUtilisateurAdded!: Utilisateur;

  constructor(private utilisateurService: UtilisateursService, private etudiantService: EtudiantService, public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getLoggedUser()
      .subscribe(user => {
        this.currentUtilisateur$ = this.utilisateurService.getUtilisateurByMail(user?.email);
      });


    this.utilisateurService.getLastUtilisateur().subscribe(user => this.lastUtilisateurAdded = user);
  }

  typeUtilisateurForm = new FormControl();

  register() {
    this.currentUtilisateur$.subscribe(utilisateur => {
      utilisateur.typeUtilisateur = this.typeUtilisateurForm.value;
      this.utilisateurService.updateUtilisateur(utilisateur).subscribe(utilisateur => {
        if (utilisateur.typeUtilisateur == "Étudiant") {
          let etudiant: Etudiant = {
            id: utilisateur.id,
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            tel: null,
            mail: utilisateur.mail,
            adresse: null,
            codePostal: null,
            ville: null,
            pays: null,
            typeUtilisateur: utilisateur.typeUtilisateur,
            numeroEtudiant: null,
            typeAffiliation: null,
            caisseAssuranceMaladie: null,
            inscription: null,
            enseignantReferent: null
          }
          console.log(etudiant);
          this.etudiantService.addEtudiant(etudiant).subscribe(etudiant => console.log(etudiant));
        }
        else if (utilisateur.typeUtilisateur == "ServiceRH") {

        }
        else if (utilisateur.typeUtilisateur == "Tuteur") {

        }
        else if (utilisateur.typeUtilisateur == "Enseignant") {

        }
        this.router.navigate(['']);
      });
    });
    // this.currentUtilisateur.typeUtilisateur = this.typeUtilisateurForm?.value;
  }
}
