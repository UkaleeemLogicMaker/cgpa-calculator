import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
>>>>>>> Authintication using Firebase

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

<<<<<<< HEAD
    constructor(private router: Router) { }

    goToregisterPage() {
        this.router.navigateByUrl('/students')
    }

=======
    username: string = ""
    password: string = ""
    conPassword: string = ""

    constructor(private router: Router, public afAuth: AngularFireAuth, public alertController: AlertController) { }

    async goToRegisterPage() {
        const { username, password, conPassword } = this

        if (password !== conPassword) {
            const alert = await this.alertController.create({
                header: 'Alert',
                message: "Password don't match",
                buttons: ['OK']
            });
            await alert.present();
        }

        try {
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
            this.router.navigateByUrl('/students')
        } catch (err) {
            console.dir(err)
        }
    }
>>>>>>> Authintication using Firebase


  

}
