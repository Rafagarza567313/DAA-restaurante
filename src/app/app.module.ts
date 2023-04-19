import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, ReservationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
