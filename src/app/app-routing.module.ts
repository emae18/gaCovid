import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'resetPass', component: ResetPasswordComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
