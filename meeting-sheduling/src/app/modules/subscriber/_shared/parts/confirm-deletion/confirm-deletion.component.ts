import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'mrs-confirm-deletion',
  templateUrl: './confirm-deletion.component.html',
  styleUrls: ['./confirm-deletion.component.scss']
})
export class ConfirmDeletionComponent implements OnInit {

  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  constructor() {}

  ngOnInit() {
  }

}
