import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
@Injectable({ providedIn: "root" })
export class UserRouteAccessService implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate(): boolean {
    const isAuthen = this.checkLogin();
    if (isAuthen === false) this.router.navigate(["/login"]);
    return isAuthen;
    return true;
  }

  checkLogin(): boolean {
    const token = localStorage.getItem('token')
    if (!token) return false;
    return true;
  }
}
