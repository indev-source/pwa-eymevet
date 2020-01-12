import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { ICustomer } from 'app/structures/customer';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    public uid:string;
    public customersCollection:AngularFirestoreCollection<ICustomer>;
    public customers:any = [];

    constructor(public afs:AngularFirestore, private auth:AuthService){
        this.auth.getUser().subscribe(user => {
            this.uid = user.uid;
            console.log("ni entra alv");
            if(this.uid) this.setCollection();
        },(error)=>{
            console.log("error: "+error.message);
        });
    }

    setCollection(){
        this.customersCollection = this.afs.collection('users').doc(this.uid).collection<ICustomer>('customers');
        
        this.customers = this.customersCollection.snapshotChanges().map(actions => {
            return actions.map(item => {
                const data = item.payload.doc.data() as ICustomer;
                const id   = item.payload.doc.id;
                return {...data,id};
            }); 
        });
    }

    add(customer: ICustomer):Promise<any>{
        if(!this.customersCollection) this.setCollection();
        
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        
        customer.createdAt = createdAt;

        return this.customersCollection.add(customer);

    }

}
