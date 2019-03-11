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

 /*   const resetField = () => {
        this.username.val('')
        this.password.val('')
    } 

*/


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
            else if (err.code == "auth/invalid-email") {
                const alert = await this.alertController.create({
                    header: 'Alert',
                    message: 'Invalid Email',
                    buttons: ['OK']
                });
               await alert.present();
            }
            else if (err.code == "auth/wrong-password") {
                const alert = await this.alertController.create({
                    header: 'Alert',
                    message: 'Wrong Password',
                    buttons: ['OK']
                });
                await alert.present();
            }
        }
    }

    goToRegisterPage() {

        this.router.navigateByUrl('/register');
    }
}