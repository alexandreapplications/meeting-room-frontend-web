import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mrs-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public company: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.company = activeRoute.snapshot.params['company'];
   }

  ngOnInit() {
  }

}
