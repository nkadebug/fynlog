import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from './c/header/header.component';
import { HomeComponent } from './p/home/home.component';
import { SummaryComponent } from './p/summary/summary.component';
import { TransactionComponent } from './p/transaction/transaction.component';
import { P404Component } from './p/p404/p404.component';
import { FooterComponent } from './c/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './c/toolbar/toolbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ProfileComponent } from './p/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SummaryComponent,
    TransactionComponent,
    P404Component,
    FooterComponent,
    ToolbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
