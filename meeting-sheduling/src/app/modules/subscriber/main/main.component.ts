import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { SubscriptionModel } from 'src/app/models/subscription.model';

@Component({
  selector: 'mrs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  protected subscriberModel: SubscriptionModel;
  constructor(private activeRoute: ActivatedRoute,
    private subscriptionService: SubscriptionService) {
    const company = activeRoute.snapshot.params['company'];
    this.subscriptionService.getSubscriber(company)
      .then(x => this.subscriberModel = x)
      .catch(x => { alert(x), console.error(x); });
   }

  ngOnInit() {
  }

}
