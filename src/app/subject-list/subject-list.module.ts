import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubjectListPage } from './subject-list.page';
import { SubjectListResolver } from './subject-list.resolver';
const routes: Routes = [
  {
    path: '',
    component: SubjectListPage,
    
    resolve: {
      data: SubjectListResolver
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
  
  declarations: [SubjectListPage],
  providers: [
    SubjectListResolver
  ]
})
export class SubjectListPageModule {}
