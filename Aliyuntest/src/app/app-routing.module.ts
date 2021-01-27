import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { Manage1Component } from './manage1/manage1.component';
import { Manage2Component } from './manage2/manage2.component';
import { Manage3Component } from './manage3/manage3.component';
import { Manage4Component } from './manage4/manage4.component';
import { ZhuceComponent } from './zhuce/zhuce.component';
import { LoginGuard } from './login.guard';
import { Manage5Component } from './manage5/manage5.component';
const mgtChildrenRoutes: Routes = [
  { path: 'manage1', component: Manage1Component },
  { path: 'manage2', component: Manage2Component },
  { path: 'manage3', component: Manage3Component },
  { path: 'manage4', component: Manage4Component },
  { path: 'manage5', component: Manage5Component },
  { path: 'zhuce', component: ZhuceComponent }
]

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'zhuce', component: ZhuceComponent },
  {
    path: 'manage', component: ManageComponent,
    children: mgtChildrenRoutes,
    //canActivate: [LoginGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
