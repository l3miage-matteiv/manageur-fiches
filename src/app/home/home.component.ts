import { Component, OnInit } from '@angular/core';
import { FicheComponent } from '../fiche/fiche.component';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
