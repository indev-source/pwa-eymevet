import { Component, OnInit } from '@angular/core';
import { SincronizacionService } from 'app/services/sincronizacion.service';
import { IProduct } from 'app/structures/product';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3';
import { iterator } from 'rxjs/internal-compatibility';
import { ProductService } from 'app/services/product.service';

declare var $: any;

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
    
    constructor(private sync:SincronizacionService, public productS:ProductService) { }

    ngOnInit() {
    }
    syncProducts(){
        this.sync.getProductsCollection().subscribe((data:any)=>{
            let results =Object.entries(data);
            let iterator:any =  results[0][1];
            iterator.forEach(product => {
                this.productS.add(product);
            });
        },(error)=>{
            console.log(error.message);
        });
    }
    showNotification(from, align) {
        const type = ['', 'info', 'success', 'warning', 'danger'];

        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}
