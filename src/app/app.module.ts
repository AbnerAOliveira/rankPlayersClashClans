import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/layouts/top-bar/top-bar.component';
import { FooterBarComponent } from './components/layouts/footer-bar/footer-bar.component';
import { HomeComponent } from './views/home/home.component';
import { WorseComponent } from './views/worse/worse.component';
import { BestComponent } from './views/best/best.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterBarComponent,
    HomeComponent,
    WorseComponent,
    BestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
