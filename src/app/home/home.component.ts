import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFicheComponent } from '../add-fiche/add-fiche.component';
import { FicheComponent } from '../fiche/fiche.component';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fiches: {companyName: string, recruiter:  string}[] = [
  {
    companyName: "Orange",
    recruiter: "Lula",
  }
  ,
  {
    companyName: "Hardis",
    recruiter: "Burrossauro",
  }
  ,
  {
    companyName: "Capgemini",
    recruiter: "Nicolas Sarcozi",
  }
  ,
  {
    companyName: "Hardis",
    recruiter: "Burrossauro",
  }
  ,
  {
    companyName: "Hardis",
    recruiter: "Burrossauro",
  }

];

  constructor(private dialog: MatDialog) { }

  addNewFiche() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = {
    //
    // }
    dialogConfig.width = '70%';
    dialogConfig.panelClass = "custom-fiche";
    const dialogRef =  this.dialog.open(AddFicheComponent, dialogConfig);
  }

}
