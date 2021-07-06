import { FicheRenseignementService } from './../services/fiche-renseignement.service';
import { FicheRenseignement } from './../services/FicheRenseignement';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Utilisateur } from '../services/Utilisateur';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant } from '../services/Etudiant';

@Component({
  selector: 'create-fiche',
  templateUrl: './create-fiche.component.html',
  styleUrls: ['./create-fiche.component.scss']
})
export class CreateFicheComponent implements OnInit {

  currentUtilisateur$!: Observable<Utilisateur | null>;
  etudiant$!: Observable<Etudiant>;
  fiche$!: Observable<FicheRenseignement>;

  constructor(private route: ActivatedRoute,
              private ficheRService: FicheRenseignementService,
              public userAuthService: AuthService,
              private serviceEtudiant: EtudiantService)
  {
    this.currentUtilisateur$ = userAuthService.getLoggedUtilisateur();
  }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    let idFiche = Number(params.get('id'));
    this.currentUtilisateur$.subscribe(utilisateur => {
      this.etudiant$ = this.serviceEtudiant.getEtudiant(utilisateur?.id as number);
    })
    this.fiche$ = this.ficheRService.getFiche(idFiche);
  }

  ficheRenseignementForm = new FormGroup({
    ficheEtudiant: new FormGroup({

    })
  });
}
