import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './p/home/home.component';
import { SummaryComponent } from './p/summary/summary.component';
import { TransactionComponent } from './p/transaction/transaction.component';
import { P404Component } from './p/p404/p404.component';
import { ProfileComponent } from './p/profile/profile.component';

const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "summary",
    pathMatch: "full",
    component: SummaryComponent
  },
  {
    path: "profile",
    pathMatch: "full",
    component: ProfileComponent
  },
  {
    path: "transaction/new",
    pathMatch: "full",
    component: TransactionComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "**",
    component: P404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
