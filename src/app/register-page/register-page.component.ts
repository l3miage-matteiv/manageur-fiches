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
    this.currentUtilisateur$.subscribe(utilisateur => this.currentUtilisateur = utilisateur);
    this.utilisateurService.getLastUtilisateur().subscribe(user => this.lastUtilisateurAdded = user);
  }

  registerForm = new FormGroup({
    telephone: new FormControl('', [
      Validators.required
    ]),
    adresse: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    codePostal: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5)
    ]),
    ville : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    pays : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  })

  get telephone() {
    return this.registerForm.get('telephone');
  }

  get adresse() {
    return this.registerForm.get('adresse');
  }

  get codePostal() {
    return this.registerForm.get('codePostal');
  }

  get ville() {
    return this.registerForm.get('ville');
  }

  get pays() {
    return this.registerForm.get('pays');
  }

  register() {

    const utilisateur: Utilisateur = {
      id: this.lastUtilisateurAdded?.id + 1,
      nom: 'Mattei',
      prenom: 'Vinicius',
      tel: this.telephone?.value,
      mail: 'viniciuspmattei@gmail.com',
      adresse: this.adresse?.value,
      codePostal: this.codePostal?.value,
      ville: this.ville?.value,
      pays: this.pays?.value,
      typeUtilisateur: null
    }

    this.utilisateurService.addUtilisateur(utilisateur);
    console.log("nouveau utilisateur cree!");
  }
}
