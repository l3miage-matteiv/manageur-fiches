import { Component } from '@angular/core';

import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Utilisateur } from '../services/Utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dataIconGoogle = 'assets/images/iconGoogle.png';

  currentUser!: firebase.User | null;
  currentUtilisateur$!: Observable<Utilisateur | null>;
  currentUtilisateur!: Utilisateur | null;

  constructor(private router: Router, public userAuthService: AuthService, private utilisateurService: UtilisateursService) {}

  ngOnInit() {
    this.userAuthService.currentUser$.subscribe(user => this.currentUser = user);
    this.currentUtilisateur$ = this.utilisateurService.getUtilisateurByMail(this.currentUser?.email);
    this.currentUtilisateur$
      .subscribe(utilisateur => {
        this.currentUtilisateur = utilisateur;
        if (this.currentUtilisateur?.id == null) {
          this.router.navigate(['/register_page/']);
        }
      })
  }
}
