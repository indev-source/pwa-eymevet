import { Component, OnInit } from '@angular/core';
import { ProductServerService } from 'app/services/product-server.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    
    public products:any = [];
    public attributes:any = [];
    constructor(private productServerService: ProductServerService) { }

    ngOnInit() {
        this.getProducts();
    }
    public getProducts(){
        this.productServerService.getProductsCollection().subscribe((res:any)=>{
            this.products = res.data;
            console.log(res);
        },(error:any)=>{

        });
    }

}
