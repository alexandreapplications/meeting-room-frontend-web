import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mrs-subscriber-admin-menu',
  templateUrl: './subscriber-admin-menu.component.html',
  styleUrls: ['./subscriber-admin-menu.component.scss']
})
export class SubscriberAdminMenuComponent implements OnInit {

  public company: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.company = activeRoute.snapshot.params['company'];
   }
  ngOnInit() {
  }

}
