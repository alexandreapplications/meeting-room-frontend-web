import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionModel } from 'src/app/models/subscription.model';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UserSubscriptionModel } from 'src/app/models/userSubscription.model';
import { UserService } from 'src/app/services/user.service';
import { UserSubscriptionService } from 'src/app/services/user-subscription.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'mrs-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public displayedColumns: string[] = ['code', 'name', 'phone', 'email', 'rowActions'];
  private subscriber: SubscriptionModel;
  public qtd = 1;
  public userSubscriptionList: Array<UserSubscriptionModel> = null;
  constructor(private activeRoute: ActivatedRoute,
    private subscriptionService: SubscriptionService,
    private userSubscriptionService: UserSubscriptionService) {
    const company = activeRoute.snapshot.params['company'];
    this.subscriptionService.getSubscriber(company)
      .then(subscriberModelResult => {
        this.subscriber = subscriberModelResult;
        this.getListInformation();
      }).catch(x => { alert(x), console.error(x); });

  }

  private getListInformation() {
    this.userSubscriptionService.getUsersBySubscription(this.subscriber)
      .then(userSubsList => {
        this.userSubscriptionList = userSubsList;
      });
  }

  public createTests() {
    this.userSubscriptionService.doCreateTestUser(this.subscriber)
    .then(value => {
      this.getListInformation();
    }).catch(reason => {
      alert(reason);
    });
  }

  ngOnInit() {
  }

}
