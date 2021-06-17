import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Utilisateur } from '../services/Utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent  {

  lastUtilisateurAdded$: Observable<Utilisateur>;
  lastUtilisateurAdded!: Utilisateur;

  constructor(private utilisateurService: UtilisateursService) {
    this.lastUtilisateurAdded$ = utilisateurService.getLastUtilisateur();
    this.lastUtilisateurAdded$
      .subscribe(user => {
        this.lastUtilisateurAdded = user;
        console.log(this.lastUtilisateurAdded);
      })
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
