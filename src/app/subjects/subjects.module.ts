import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SubjectsPage } from './subjects.page';
import { SubjectListPage } from '../subject-list/subject-list.page';
import { SubjectsResolver } from './subjects.resolver';

const routes: Routes = [
    {
        path: '',
        component: SubjectsPage,
        resolve: {
            data: SubjectsResolver
          }
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    
    declarations: [SubjectsPage],
    providers: [
        SubjectsResolver
      ]
})
export class SubjectsPageModule { }
