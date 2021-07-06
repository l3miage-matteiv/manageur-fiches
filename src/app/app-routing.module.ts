import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateFicheComponent } from './create-fiche/create-fiche.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'fiche_renseignement/:id', component: CreateFicheComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register_page', component: RegisterPageComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
