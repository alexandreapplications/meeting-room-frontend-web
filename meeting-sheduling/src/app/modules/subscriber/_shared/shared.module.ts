import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberMenuComponent } from './parts/subscriber-menu/subscriber-menu.component';
import { SubscriberNameComponent } from './parts/subscriber-name/subscriber-name.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    SubscriberMenuComponent,
    SubscriberNameComponent
  ],
  declarations: [SubscriberMenuComponent, SubscriberNameComponent]
})
export class SharedModule { }
