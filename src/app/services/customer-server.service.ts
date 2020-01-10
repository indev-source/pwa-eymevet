import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CustomerServerService {
    private URL_API = 'http://localhost:8000/api/v1/customers/1';
    constructor(private http:HttpClient) { }

    public getCustomerResource(){
        return this.http.get(this.URL_API);
    }
}
