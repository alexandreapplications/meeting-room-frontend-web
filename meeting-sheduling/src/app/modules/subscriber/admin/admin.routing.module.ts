import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceGroupListComponent } from './place-group/place-group-list/place-group-list.component';
import { PlaceGroupEditComponent } from './place-group/place-group-edit/place-group-edit.component';
import { PlaceListComponent } from './place/place-list/place-list.component';
import { PlaceEditComponent } from './place/place-edit/place-edit.component';

const routes: Routes = [
    {  path: 'placegroup', component: PlaceGroupListComponent },
    {  path: 'placegroup/:id', component: PlaceGroupEditComponent },
    {  path: 'place', component: PlaceListComponent },
    {  path: 'place/:id', component: PlaceEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
