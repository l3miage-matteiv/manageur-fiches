import { Component } from '@angular/core';

import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  dataIconGoogle = 'assets/images/iconGoogle.png';

  user$: Observable<firebase.User | null>;

  constructor(public auth: AngularFireAuth)
  {
    this.user$ = auth.authState;
    this.user$
      .subscribe(user => {
        console.log(user?.displayName);
      })
  }

  login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    this.auth.signInWithPopup(provider);
    // this.redirectUserAfterLogin();
  }

  logout(): void {
    this.auth.signOut();
    // this.chamisConnecteService.setChamisConnecte(null);
  }

  isLoggedIn(): Observable<firebase.User | null> {
    return this.user$;
  }
}
