import { Component, OnInit } from '@angular/core';
import { CustomerServerService } from 'app/services/customer-server.service';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

    public customers:any = [];
    constructor(private customerServerService: CustomerServerService) { }

    ngOnInit() { 
        this.getCustomers();
    }

    public getCustomers(){
        this.customerServerService.getCustomerResource().subscribe((res:any)=>{
            this.customers = res.data;
            console.log(this.customers)
        },(error:any)=>{

        });
    }

}
