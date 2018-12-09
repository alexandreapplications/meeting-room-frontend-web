import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDeletionComponent } from '../confirm-deletion/confirm-deletion.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'mrs-subscriber-menu',
  templateUrl: './subscriber-menu.component.html',
  styleUrls: ['./subscriber-menu.component.scss']
})
export class SubscriberMenuComponent implements OnInit {

  public company: string;
  constructor(private activeRoute: ActivatedRoute,
    private dialog: MatDialog) {
    this.company = activeRoute.snapshot.params['company'];
   }

  ngOnInit() {
  }

}
