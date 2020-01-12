import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { IProduct } from 'app/structures/product';
import { AuthService } from './auth.service';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product:IProduct;
  public uid:string;
  public productsCollection:AngularFirestoreCollection<IProduct>;
  public products:any = [];



  constructor(private afs:AngularFirestore, private auth:AuthService){
    this.auth.getUser().subscribe(user => {
      this.uid = user.uid;
      if(this.uid) this.setCollection();
    });
  }

  setCollection(){
    this.productsCollection = this.afs.collection('users').doc(this.uid).collection<IProduct>('products');
  }
  add(product:IProduct){


    if(!this.productsCollection) this.setCollection();

    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    product.createdAt = createdAt;

    return this.productsCollection.add(product);
  }
}
