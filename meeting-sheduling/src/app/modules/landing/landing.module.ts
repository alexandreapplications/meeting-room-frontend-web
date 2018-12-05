import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingRoutingModule } from './landing.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingMenuComponent } from './_shared/parts/landing-menu/landing-menu.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LandingRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    MainComponent,
    AboutComponent,
    ContactComponent,
    SubscribeComponent,
    LandingMenuComponent]
})
export class LandingModule { }
