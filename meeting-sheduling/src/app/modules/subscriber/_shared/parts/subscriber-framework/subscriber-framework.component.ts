import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mrs-subscriber-framework',
  templateUrl: './subscriber-framework.component.html',
  styleUrls: ['./subscriber-framework.component.scss']
})
export class SubscriberFrameworkComponent implements OnInit {

  @Input() showWaitMessage = false;

  constructor() { }


  ngOnInit() {
  }

}
