import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { PlaceGroupListComponent } from './place-group/place-group-list/place-group-list.component';
import { PlaceGroupEditComponent } from './place-group/place-group-edit/place-group-edit.component';
import { PlaceListComponent } from './place/place-list/place-list.component';
import { PlaceEditComponent } from './place/place-edit/place-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    PlaceGroupListComponent,
    PlaceGroupEditComponent,
    PlaceListComponent,
    PlaceEditComponent,
    UserListComponent,
    UserEditComponent,
    MySubscriptionComponent
  ]
})
export class AdminModule { }
