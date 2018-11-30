import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mrs-place-group-list',
  templateUrl: './place-group-list.component.html',
  styleUrls: ['./place-group-list.component.scss']
})
export class PlaceGroupListComponent implements OnInit {

  public company: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.company = activeRoute.snapshot.params['company'];
   }
  ngOnInit() {
  }

}
