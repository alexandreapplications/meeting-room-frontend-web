import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionModel } from 'src/app/models/subscription.model';
import { PlaceGroupModel } from 'src/app/models/place-group.model';
import { PlaceModel } from 'src/app/models/place.model';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { PlaceGroupService } from 'src/app/services/place-group.service';
import { MatSnackBar } from '@angular/material';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'mrs-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  public displayedColumns: string[] = ['code', 'name', 'locationDescription', 'maxUsers', 'rowActions'];

  private subscriber: SubscriptionModel;
  public placeList: Array<PlaceModel>;
  public wait = true;

  constructor(private activeRoute: ActivatedRoute,
    private subscriptionService: SubscriptionService,
    private placeService: PlaceService,
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
    this.placeService.getBySubscription(this.subscriber.id).then(
      respose => {
        this.wait = false;
        this.placeList = respose;
      }
    );
  }

  public deleteRecord(id: string) {
    this.placeService.delete(id).then(result => {
        this.snackBar.open('Deleted', id, {
          duration: 2000
        });
        this.getListInformation();
    });
  }
}
