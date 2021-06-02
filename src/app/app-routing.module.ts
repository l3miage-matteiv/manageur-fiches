import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateFicheComponent } from './create-fiche/create-fiche.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fiche_renseignement', component: CreateFicheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
