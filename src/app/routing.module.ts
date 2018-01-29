import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {SqlSnippetsComponent} from './sql-snippets/sql-snippets.component';
import {UserSignInComponent} from "./user-sign-in/user-sign-in.component";

const routes: Routes = [
  {
    path: '',
    component: UserSignInComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'sqlsnippets',
    component: SqlSnippetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
