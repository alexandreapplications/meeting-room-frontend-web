import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mrs-place-group-edit',
  templateUrl: './place-group-edit.component.html',
  styleUrls: ['./place-group-edit.component.scss']
})
export class PlaceGroupEditComponent implements OnInit {

  public company: string;
  public id: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.company = activeRoute.snapshot.params['company'];
    this.id = activeRoute.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
