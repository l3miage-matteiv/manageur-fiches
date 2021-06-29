import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddFicheComponent } from '../add-fiche/add-fiche.component';
import { FicheComponent } from '../fiche/fiche.component';
import { FicheRenseignementService } from '../services/fiche-renseignement.service';
import { FicheRenseignement } from '../services/FicheRenseignement';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fiches$: Observable<FicheRenseignement[]>;

  constructor(private dialog: MatDialog,
              public fichesService: FicheRenseignementService)
  {
    this.fiches$ = fichesService.getAllFiches();
    this.fiches$
      .subscribe(fiches => {
        console.log(fiches);
      })
  }

  addNewFiche() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    dialogConfig.panelClass = "custom-fiche";
    const dialogRef =  this.dialog.open(AddFicheComponent, dialogConfig);
  }

}
