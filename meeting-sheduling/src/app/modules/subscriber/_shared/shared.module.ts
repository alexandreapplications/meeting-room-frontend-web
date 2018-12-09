import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberMenuComponent } from './parts/subscriber-menu/subscriber-menu.component';
import { SubscriberNameComponent } from './parts/subscriber-name/subscriber-name.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatDialogModule } from '@angular/material';
import { SubscriberFrameworkComponent } from './parts/subscriber-framework/subscriber-framework.component';
import { ConfirmDeletionComponent } from './parts/confirm-deletion/confirm-deletion.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ], exports: [
    SubscriberMenuComponent,
    SubscriberNameComponent,
    SubscriberFrameworkComponent,
    ConfirmDeletionComponent
  ], entryComponents: [
    ConfirmDeletionComponent
  ],
  declarations: [SubscriberMenuComponent, SubscriberNameComponent, SubscriberFrameworkComponent, ConfirmDeletionComponent]
})
export class SharedModule { }
