import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddFicheComponent } from '../add-fiche/add-fiche.component';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { FicheRenseignementService } from '../services/fiche-renseignement.service';
import { FicheRenseignement } from '../services/FicheRenseignement';
import { Utilisateur } from '../services/Utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fiches$!: Observable<FicheRenseignement[]>;
  currentUtilisateur$!: Observable<Utilisateur | null>;
  currentUser$!: Observable<firebase.User | null>

  constructor(private dialog: MatDialog,
              public fichesService: FicheRenseignementService,
              private authService: AuthService,
              private utilisateurService: UtilisateursService)
  {
    this.currentUser$ = authService.getLoggedUser();
    this.currentUser$
    .subscribe(user => {
      this.currentUtilisateur$ = this.utilisateurService.getUtilisateurByMail(user?.email);
      this.currentUtilisateur$
        .subscribe(utilisateur => {
          this.fiches$ = fichesService.getAllFichesFromUtilisateur(utilisateur as Utilisateur);
        })
      });
    // this.currentUtilisateur$ = authService.getLoggedUtilisateur();
  }

  addNewFiche() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    dialogConfig.panelClass = "custom-fiche";
    const dialogRef =  this.dialog.open(AddFicheComponent, dialogConfig);
  }

}
