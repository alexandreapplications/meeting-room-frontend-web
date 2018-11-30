import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mrs-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

  public company: string;
  public id: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.company = activeRoute.snapshot.params['company'];
    this.id = activeRoute.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
