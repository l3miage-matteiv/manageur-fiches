import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utilisateur } from './Utilisateur';
import { UtilisateursService } from './utilisateurs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSource = new BehaviorSubject<firebase.User | null>(null);
  private utilisateurSource = new BehaviorSubject<Utilisateur | null>(null);

  public currentUser$ = this.userSource.asObservable();
  public currentUtilisateur$ = this.utilisateurSource.asObservable();

  public currentUser!: firebase.User | null;

  private lastUtilisateurAdded!: Utilisateur;
  private newUtilisateur: Utilisateur =
  {
    id: -1,
    nom: '',
    prenom: '',
    tel: null,
    mail: '',
    adresse: null,
    codePostal: null,
    ville: null,
    pays: null,
    typeUtilisateur: 'Utilisateur'
  }

  private nom!: string;
  private prenom!: string;

  constructor(
    private auth: AngularFireAuth,
    private utilisateurService: UtilisateursService,
    private router: Router,
    private route: ActivatedRoute)
  {
    this.currentUser$ = auth.authState;
    this.currentUser$
      .subscribe(user => {
        this.utilisateurService.getUtilisateurByMail(user?.email).subscribe(utilisateur => this.utilisateurSource.next(utilisateur))
      });

    // Recuperer le dernier utilisateur dans la BDD
    this.utilisateurService.getLastUtilisateur().subscribe(user => this.lastUtilisateurAdded = user);
  }

  login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    this.auth.signInWithPopup(provider)
    .then(() => {
      // let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      // this.router.navigate([[returnUrl] || '/' || '']);
      this.currentUser$.subscribe(user => {
        this.utilisateurService.getUtilisateurByMail(user?.email)
          .subscribe(utilisateur => {
            // Si on ne trouve pas l'utilisateur dans la BDD
            if (utilisateur?.id == null) {
                let noms = user ? user?.displayName?.split(' ') : null;
                let prenom = '';
                let nom = '';
                if (noms != null) {
                  prenom = noms[0];
                  nom = noms[1];
                }
                this.newUtilisateur.id = this.lastUtilisateurAdded?.id + 1;
                this.newUtilisateur.nom = nom;
                this.newUtilisateur.prenom = prenom;
                this.newUtilisateur.mail = user?.email as string;
                this.utilisateurSource.next(this.newUtilisateur);
                this.utilisateurService.addUtilisateur(this.newUtilisateur).subscribe(utilisateur => console.log(utilisateur));
                this.router.navigate(['/register_page']);
              }
              else {
                this.utilisateurSource.next(utilisateur);
              }
          })
      });
    }).catch(error => {
      console.error(error);
    })
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
