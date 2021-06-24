import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utilisateur } from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSource = new BehaviorSubject<firebase.User | null>(null);
  private utilisateurSource = new BehaviorSubject<Utilisateur | null>(null);

  userConnected$ = this.userSource.asObservable();
  utilisateurConnected$ = this.utilisateurSource.asObservable();

  constructor(private auth: AngularFireAuth) {
    this.userConnected$ = auth.authState;
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

  isLoggedIn() {
    return this.userConnected$;
  }
}
