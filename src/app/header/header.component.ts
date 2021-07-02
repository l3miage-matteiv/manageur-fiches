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

  currentUser$!: Observable<firebase.User | null>;
  currentUser!: firebase.User | null;
  currentUtilisateur$!: Observable<Utilisateur | null>;
  currentUtilisateur!: Utilisateur | null;

  constructor(private router: Router, public authService: AuthService, private utilisateurService: UtilisateursService) {}

  ngOnInit() {
    this.currentUser$ = this.authService.currentUser$;
  }
}
