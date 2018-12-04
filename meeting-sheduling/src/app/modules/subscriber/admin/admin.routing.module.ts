import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceGroupListComponent } from './place-group/place-group-list/place-group-list.component';
import { PlaceGroupEditComponent } from './place-group/place-group-edit/place-group-edit.component';
import { PlaceListComponent } from './place/place-list/place-list.component';
import { PlaceEditComponent } from './place/place-edit/place-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';

const routes: Routes = [
    {  path: 'placegroup', component: PlaceGroupListComponent },
    {  path: 'placegroup/:id', component: PlaceGroupEditComponent },
    {  path: 'place', component: PlaceListComponent },
    {  path: 'place/:id', component: PlaceEditComponent },
    {  path: 'user', component: UserListComponent },
    {  path: 'user/:id', component: UserEditComponent },
    {  path: 'mysubscription', component: MySubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
