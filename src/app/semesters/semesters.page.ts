import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
@Component({
    selector: 'app-semesters',
    templateUrl: './semesters.page.html',
    styleUrls: ['./semesters.page.scss'],
})
export class SemestersPage implements OnInit {
    things: Array<any>;
    constructor(
        public loadingCtrl: LoadingController,
        private router: Router,
        private authService: AuthService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

    }




    goToSubPage() {

        this.router.navigate(['/subjects']);
    }
    logout() {
        this.authService.doLogout()
            .then(res => {
                this.router.navigate(["/home"]);
            }, err => {
                console.log(err);
            })
    }
}
