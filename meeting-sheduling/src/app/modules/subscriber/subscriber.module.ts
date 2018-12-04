import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberRoutingModule } from './subscriber.routing.module';
import { MainComponent } from '../subscriber/main/main.component';
import { SharedModule } from './_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SubscriberRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class SubscriberModule { }
