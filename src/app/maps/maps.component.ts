import { Component, OnInit } from '@angular/core';
import { CustomerServerService } from 'app/services/customer-server.service';
import { CustomerService } from 'app/services/customer.service';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

    public customers:any = [];
    constructor(private customerS:CustomerService) { }

    ngOnInit() { 
       
    }

    

}
