import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mrs-subscriber-menu',
  templateUrl: './subscriber-menu.component.html',
  styleUrls: ['./subscriber-menu.component.scss']
})
export class SubscriberMenuComponent implements OnInit {

  public company: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.company = activeRoute.snapshot.params['company'];
   }

  ngOnInit() {
  }

}
