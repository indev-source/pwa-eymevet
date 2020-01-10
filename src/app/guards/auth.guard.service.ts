import  { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private afAuth: AngularFireAuth, private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
        return this.afAuth.authState.take(1).map((user:firebase.User)=>{
            return !!user; // regresar el booleano para agregarlo al valor original
        }).do((authenticated:boolean)=>{
            if(!authenticated) this.router.navigate(['/login']);
        });
    }

}