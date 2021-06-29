import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utilisateur } from './Utilisateur';
import { UtilisateursService } from './utilisateurs.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSource = new BehaviorSubject<firebase.User | null>(null);
  private utilisateurSource = new BehaviorSubject<Utilisateur | null>(null);

  public currentUser$ = this.userSource.asObservable();
  public currentUtilisateur$ = this.utilisateurSource.asObservable();

  private lastUtilisateurAdded!: Utilisateur;

  private nom!: string;
  private prenom!: string;

  constructor(private auth: AngularFireAuth,
              private utilisateurService: UtilisateursService)
  {
    auth.authState
      .subscribe(user => {
        // Recuperer le nom et prenom de l'attribut displayName de l'user
        let noms = user ? user?.displayName?.split(' ') : null;
        if (noms != null) {
          this.prenom = noms[0];
          this.nom = noms[1];
        }

        this.userSource.next(user);

        this.utilisateurService.getUtilisateurByMail(user?.email)
          .subscribe(utilisateur => {
            if (utilisateur?.id == null) {
              // Ajout l'utilisateur dans la BDD
              const newUtilisateur: Utilisateur =
              {
                id: this.lastUtilisateurAdded?.id + 1,
                nom: this.nom,
                prenom: this.prenom,
                tel: null,
                mail: user?.email as string,
                adresse: null,
                codePostal: null,
                ville: null,
                pays: null,
                typeUtilisateur: null
              }
              this.utilisateurSource.next(newUtilisateur);
              this.utilisateurService.addUtilisateur(newUtilisateur).subscribe(utilisateur => console.log(utilisateur));
            }
            else {
              this.utilisateurSource.next(utilisateur);
              console.log("Utilisateur trouve dans la BDD")
            }
          });
      });
    // Recuperer le dernier utilisateur dans la BDD
    this.utilisateurService.getLastUtilisateur().subscribe(user => this.lastUtilisateurAdded = user);
  }

  login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    this.auth.signInWithPopup(provider);
  }

  logout(): void {
    this.auth.signOut();
  }

  getLoggedUser() {
    return this.currentUser$;
  }

  getLoggedUtilisateur() {
    return this.currentUtilisateur$;
  }
}
