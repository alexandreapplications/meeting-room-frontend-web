import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { PlaceGroupListComponent } from './place-group/place-group-list/place-group-list.component';
import { PlaceGroupEditComponent } from './place-group/place-group-edit/place-group-edit.component';
import { PlaceListComponent } from './place/place-list/place-list.component';
import { PlaceEditComponent } from './place/place-edit/place-edit.component';
import { SubscriberAdminMenuComponent } from './_parts/subscriber-admin-menu/subscriber-admin-menu.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    PlaceGroupListComponent,
    PlaceGroupEditComponent,
    PlaceListComponent,
    PlaceEditComponent,
    SubscriberAdminMenuComponent
  ]
})
export class AdminModule { }
