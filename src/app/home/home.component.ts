import { Component, OnInit } from '@angular/core';
import { FicheComponent } from '../fiche/fiche.component';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fiches: FicheComponent[] = [
  {
    companyName: "Orange",
    recruiter: "Lula",
    modifyFiche(){}
  }
  ,
  {
    companyName: "Hardis",
    recruiter: "Burrossauro",
    modifyFiche(){}
  }

];

  constructor() { }

  ngOnInit(): void {
  }

}
