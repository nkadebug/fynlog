import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { P404Component } from './pages/p404/p404.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
