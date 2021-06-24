import { FicheRenseignementService } from './../services/fiche-renseignement.service';
import { FicheRenseignement } from './../services/FicheRenseignement';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'create-fiche',
  templateUrl: './create-fiche.component.html',
  styleUrls: ['./create-fiche.component.scss']
})
export class CreateFicheComponent implements OnInit {

  id!: number;
  fiche$!: Observable<FicheRenseignement>;
  fiche!: FicheRenseignement;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private ficheRService: FicheRenseignementService) { }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    this.id = Number(params.get('id'));
    this.fiche$ = this.ficheRService.getFiche(this.id);
    this.fiche$
      .subscribe(fiche => {
        this.fiche = fiche;
      })
  }

}
