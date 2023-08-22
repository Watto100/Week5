import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path:'', component: AdminComponent, children: [{path:'', component: UserPageComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
