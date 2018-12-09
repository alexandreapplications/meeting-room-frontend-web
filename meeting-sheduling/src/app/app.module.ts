import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserSubscriptionService } from './services/user-subscription.service';
import { SubscriptionService } from './services/subscription.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PlaceGroupService } from './services/place-group.service';
import { PlaceService } from './services/place.service';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    UserSubscriptionService,
    SubscriptionService,
    PlaceGroupService,
    PlaceService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
