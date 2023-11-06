import { SecretComponent } from './secret/secret.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: 'secret',
    loadChildren: () => import('./secret/secret.module')
    .then(m => m.SecretModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module')
      .then(m => m.SigninModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module')
      .then(m => m.ResetPassword)
  },
  {
    path: '',
    component: SecretComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
