import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Menu', icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Perfil', icon: 'pe-7s-user', class: '' },
    { path: '/productos', title: 'Productos', icon: 'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Ventas', icon: 'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Creditos', icon: 'pe-7s-science', class: '' },
    { path: '/clientes', title: 'Clientes', icon: 'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Sincronizar', icon: 'pe-7s-bell', class: '' },

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(private afAuth: AngularFireAuth, private router: Router) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    logout(){
        this.afAuth.auth.signOut().then(()=>{
            this.router.navigate(['/login']);
        });
    }
}
