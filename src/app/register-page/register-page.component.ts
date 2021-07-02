import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Utilisateur } from '../services/Utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  dataIconGoogle = 'assets/images/iconGoogle.png';

  currentUser!: firebase.User | null;
  currentUtilisateur$!: Observable<Utilisateur | null>;
  currentUtilisateur!: Utilisateur | null;
  lastUtilisateurAdded!: Utilisateur;

  constructor(private utilisateurService: UtilisateursService, public userAuthService: AuthService) {}

  ngOnInit() {
    this.userAuthService.currentUser$.subscribe(user => this.currentUser = user);
    this.currentUtilisateur$ = this.utilisateurService.getUtilisateurByMail(this.currentUser?.email);
    this.utilisateurService.getLastUtilisateur().subscribe(user => this.lastUtilisateurAdded = user);
  }

  typeUtilisateurForm = new FormControl();

  register() {

    // const utilisateur: Utilisateur = {
    //   id: this.lastUtilisateurAdded?.id + 1,
    //   nom: 'Mattei',
    //   prenom: 'Vinicius',
    //   tel: this.telephone?.value,
    //   mail: 'viniciuspmattei@gmail.com',
    //   adresse: this.adresse?.value,
    //   codePostal: this.codePostal?.value,
    //   ville: this.ville?.value,
    //   pays: this.pays?.value,
    //   typeUtilisateur: "Utilisateur"
    // }

    // this.utilisateurService.addUtilisateur(utilisateur);
    console.log("nouveau utilisateur cree!");
  }
}
