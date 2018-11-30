import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mrs-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  public company: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.company = activeRoute.snapshot.params['company'];
   }

   ngOnInit() {
  }

}
