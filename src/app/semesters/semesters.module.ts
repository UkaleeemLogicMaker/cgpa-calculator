import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SemestersPage } from './semesters.page';
import { SemestersResolver } from './semesters.resolver';

const routes: Routes = [
    {
        path: '',
        component: SemestersPage,
        
        resolve: {
            data: SemestersResolver
          }
    }
    
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SemestersPage],
    providers: [
        SemestersResolver
      ]
})
export class SemestersPageModule { }
