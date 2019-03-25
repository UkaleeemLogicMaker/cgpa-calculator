import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    private snapshotChangesSubscription: any;


    constructor(
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth
    ) { }

  


    createSubjects(value) {
        return new Promise<any>((resolve, reject) => {
            let currentUser = firebase.auth().currentUser; 
            this.afs.collection('people').doc(currentUser.uid).collection('Course').add({
                subName: value.subName,
                subCode: value.subCode,
                creditHour: value.creditHour
                
            })
                .then(
                    res => resolve(res),
                    err => reject(err)
                )
        })
    }


    unsubscribeOnLogOut() {
        //remember to unsubscribe from the snapshotChanges
      // this.snapshotChangesSubscription.unsubscribe();
    }

}