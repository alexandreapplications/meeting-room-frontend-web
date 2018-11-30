import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberRoutingModule } from './subscriber.routing.module';
import { MainComponent } from '../subscriber/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    SubscriberRoutingModule
  ],
  declarations: [MainComponent]
})
export class SubscriberModule { }
