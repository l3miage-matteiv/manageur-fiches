import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FicheRenseignement } from '../services/FicheRenseignement';

@Component({
  selector: 'add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.scss']
})
export class AddFicheComponent {

  private fiche: FicheRenseignement | null = null;

  constructor(public dialogRef: MatDialogRef<AddFicheComponent>) { }

  ficheForm = new FormGroup({
    fiche: new FormGroup({
      raisonSociale: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      representantLegal: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      recruiterEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      hrServiceEmail : new FormControl('', [
        Validators.email
      ]),
      teacherEmail : new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  })

  get raisonSociale() {
    return this.ficheForm.get('fiche.raisonSociale');
  }

  get representantLegal() {
    return this.ficheForm.get('fiche.representantLegal');
  }

  get recruiterEmail() {
    return this.ficheForm.get('fiche.recruiterEmail');
  }

  get hrServiceEmail() {
    return this.ficheForm.get('fiche.hrServiceEmail');
  }

  get teacherEmail() {
    return this.ficheForm.get('fiche.teacherEmail');
  }

  createNewFiche() {
    // this.fiche= {
    //   id: this.id?.value,
    //   titre : this.titre?.value,
    //   nomType : this.nomType?.value
    // }
    // this.motsCles= {
    //   defisId: this.id?.value,
    //   motCle: this.motscles?.value
    // }
    // this.defiService.addDefis(this!.defis).subscribe(defi => console.log(defi));
    // this.motsClesService.addMotsCles(this!.motsCles).subscribe(motcles => console.log(motcles));
    console.log("New Fiche Added!")
    this.dialogRef.close();
  }

  closeWindow(): void {
    this.dialogRef.close();
  }
}
