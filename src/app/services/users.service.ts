import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { IUser } from 'app/structures/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private users: AngularFirestoreCollection<IUser>;
    constructor(private afs: AngularFirestore) { 
        this.users = afs.collection<IUser>('users');
    }

    add(user:IUser): Promise<void>{
        return this.users.doc(user.uid).set(user).catch(console.log);
    }
}
