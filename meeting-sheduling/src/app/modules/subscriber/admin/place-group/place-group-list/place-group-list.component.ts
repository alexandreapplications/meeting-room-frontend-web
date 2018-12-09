import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceGroupService } from 'src/app/services/place-group.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { SubscriptionModel } from 'src/app/models/subscription.model';
import { PlaceGroupModel } from 'src/app/models/place-group.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'mrs-place-group-list',
  templateUrl: './place-group-list.component.html',
  styleUrls: ['./place-group-list.component.scss']
})
export class PlaceGroupListComponent implements OnInit {
  public displayedColumns: string[] = ['code', 'name', 'building', 'enabled', 'rowActions'];

  private subscriber: SubscriptionModel;
  public placeGroupList: Array<PlaceGroupModel>;
  public wait = true;

  constructor(private activeRoute: ActivatedRoute,
    private subscriptionService: SubscriptionService,
    private placeGroupService: PlaceGroupService,
    private snackBar: MatSnackBar) {
    const company = activeRoute.snapshot.params['company'];

    this.subscriptionService.getSubscriber(company)
    .then(subscriberModelResult => {
      this.subscriber = subscriberModelResult;
      this.getListInformation();
    }).catch(x => { alert(x), console.error(x); });

   }
  ngOnInit() {
  }

  private getListInformation() {
    this.placeGroupService.getBySubscription(this.subscriber.id).then(
      respose => {
        this.wait = false;
        this.placeGroupList = respose;
      }
    );
  }

  public deleteRecord(id: string) {
    this.placeGroupService.delete(id).then(result => {
        this.snackBar.open('Deleted', id, {
          duration: 2000
        });
        this.getListInformation();
    });
  }

}
