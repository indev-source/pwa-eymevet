import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ProductServerService {

    private URL_API = 'http://localhost:8000/api/v1/products/1';
    constructor(private http:HttpClient) { }

    public getProductsCollection(){
        return this.http.get(this.URL_API);
    }
}
