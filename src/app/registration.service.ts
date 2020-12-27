import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Registration } from './registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private firestore: AngularFirestore) { }


  // TO Create Data
  createAccount(register:Registration){
    return this.firestore.collection("registration").add(register);
  };

  // TO Fetch Data

  getAllAccount(){
    return this.firestore.collection('registration').snapshotChanges();
  }





  
}
