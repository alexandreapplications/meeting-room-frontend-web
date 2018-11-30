import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingRoutingModule } from './landing.routing.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [
    MainComponent,
    AboutComponent,
    ContactComponent,
    SubscribeComponent]
})
export class LandingModule { }
