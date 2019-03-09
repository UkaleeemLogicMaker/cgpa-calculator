import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(private router: Router, public afAuth: AngularFireAuth, public alertController: AlertController) { }

    username: string = ""
    password: string = ""


    async goToHomePage() {

        const { username, password } = this
        try {
            const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
            this.router.navigateByUrl('/students');
        } catch (err) {
            console.dir(err)
            if (err.code == "auth/user-not-found") {
                const alert = await this.alertController.create({
                    header: 'Alert',
                    message: 'User not found',
                    buttons: ['OK']
                });
                await alert.present();
            }
        }




    }

    goToregisterPage() {

        this.router.navigateByUrl('/register');
    }
}