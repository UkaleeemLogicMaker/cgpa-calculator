import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

    email: string = ""
    password: string = ""
    conPassword: string = ""

    constructor(private router: Router, public afAuth: AngularFireAuth, public alertController: AlertController) { }

    async goToRegisterPage() {
        const { email, password, conPassword } = this

        if (password !== conPassword) {
            const alert = await this.alertController.create({
                header: 'Alert',
                message: "Password don't match",
                buttons: ['OK']
            });
            await alert.present();
        }

        else {
                try {
                const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                this.router.navigateByUrl('/students')
            } catch (err) {
                console.dir(err)
                if (err.code == "auth/weak-password"){
                    const alert = await this.alertController.create({
                        header: 'Alert',
                        message: 'The password must be 6 characters long or more',
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
                else if (err.code == "auth/email-already-in-use") {
                    const alert = await this.alertController.create({
                        header: 'Alert',
                        message: 'The email address is already in use by another account',
                        buttons: ['OK']
                    });
                await alert.present();
                }
            }
        }
    }
} 

