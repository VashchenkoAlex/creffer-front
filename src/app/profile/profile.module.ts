import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
