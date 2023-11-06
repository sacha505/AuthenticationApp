import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretComponent } from './secret.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: SecretComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SecretModule { }
