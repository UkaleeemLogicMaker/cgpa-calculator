import { SubjectListPage } from './../subject-list/subject-list.page';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';

import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.page.html',
    styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {

    subject_form: FormGroup;
    subjects: Array<any>;
    gradeArray: number[]=[];
    creditHourArray: number[]=[];
    creditHourTot: number=0;


    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private firebaseService: FirebaseService,
        private router: Router,
        private route: ActivatedRoute,
        public loadingCtrl: LoadingController,
       // public gradeArray: number[],
       // public creditHourArray: number[]

    ) { }
    ngOnInit() {
        if (this.route && this.route.data) {
            this.getData();
          }
          this.resetFields();
     
        }

        async getData(){
            /*    const loading = await this.loadingCtrl.create({
                  message: 'Please wait...'
                });
                this.presentLoading(loading);
            */
                this.route.data.subscribe(routeData => {
                  routeData['data'].subscribe(data => {
                  //  loading.dismiss();
                    this.subjects = data;
                  })
                })
              }
            
              async presentLoading(loading) {
                return await loading.present();
              }

    resetFields() {
        this.subject_form = this.formBuilder.group({
            subName: new FormControl('', Validators.required),
            subCode: new FormControl('', Validators.required),
            creditHour: new FormControl('', Validators.required),
            grade: new FormControl('', Validators.required)
        });
    }
    
    onSubmit(value) {
        this.gradeArray.push(value.grade)
        this.creditHourArray.push(value.creditHour)
        let data = {
            subName: value.subName,
            subCode: value.subCode,
            creditHour: value.creditHour,
            grade: value.grade,
        }

        
        this.creditHourTot= this.creditHourTot + value.creditHour;
        

        
        this.firebaseService.createSubjects(data)
        this.firebaseService.createGPA(this.gradeArray,this.creditHourArray)
        
    }
    
    goToSemPage() {
        this.router.navigate(["/semesters"]);
    }

    goToSubListPage(){
      this.router.navigate(["/subject-list"]);
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
