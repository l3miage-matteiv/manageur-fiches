import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user!: firebase.User | null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authService.getLoggedUser()
      .subscribe(user => {
        this.user = user;
      });
    if (this.user) {
      return true;
    }

    // this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
    return false;
  }
}
