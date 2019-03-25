import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SubjectsPage } from './subjects.page';

const routes: Routes = [
    {
        path: '',
        component: SubjectsPage
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
    providers: [Location],
    declarations: [SubjectsPage]
})
export class SubjectsPageModule { }
