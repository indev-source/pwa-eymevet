import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private auth:AuthService, private router:Router) { }

    ngOnInit() {
        this.auth.getUser().subscribe(console.log);
    }
    
    login(){
        this.auth.login().then(()=>{
            this.router.navigate(['/dashboard']);
        })
    }
}
