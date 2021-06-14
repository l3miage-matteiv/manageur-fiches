import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFicheComponent } from '../add-fiche/add-fiche.component';
import { FicheComponent } from '../fiche/fiche.component';
import { FichesService } from '../services/fiches.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private dialog: MatDialog,
              public fichesService: FichesService) { }

  addNewFiche() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    dialogConfig.panelClass = "custom-fiche";
    const dialogRef =  this.dialog.open(AddFicheComponent, dialogConfig);
  }

}
