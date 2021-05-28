import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent {

  @Input('companyName') companyName: string = '';
  @Input('recruiter') recruiter: string = '';

  constructor() { }

  modifyFiche() {
    console.log("Modify Fiche");
  }

}
