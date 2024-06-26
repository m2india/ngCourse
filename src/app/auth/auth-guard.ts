import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { AuthServices } from "./auth.services";

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

    constructor(private authService: AuthServices, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.pipe(
            take(1),
            map(user => {
            const isAuth = !!user;

            if(isAuth){
                return true;
            }
            return this.router.createUrlTree(['/auth']);
           // return !!user;
        })
        // tap(isAuth =>{
        //     if(!isAuth){
        //         this.router.navigate(['/auth']);
        //     }
        // })
    
    )
    }
}