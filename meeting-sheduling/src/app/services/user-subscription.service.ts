import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSubscriptionModel } from '../models/userSubscription.model';
import { environment } from 'src/environments/environment';
import { SubscriptionModel } from '../models/subscription.model';
import { Observable, forkJoin } from 'rxjs';
import { UserService } from './user.service';
import { UserModel } from '../models/user.model';
import { promise } from 'protractor';
const Chance = require('chance');

@Injectable({
  providedIn: 'root'
})
export class UserSubscriptionService {


  constructor(private http: HttpClient, private userService: UserService) { }

  public create(model: UserSubscriptionModel): Promise<UserSubscriptionModel> {
    const url = `${environment.apiUrls.security}UserSubscription/create`;

    return this.http.post<UserSubscriptionModel>(url, model).toPromise();
  }

  public getUsersSubscriptionBySuscriptionId(id: string): Promise<Array<UserSubscriptionModel>> {
    const url = `${environment.apiUrls.security}UserSubscription/getbysubscription/${id}`;

    return this.http.get<Array<UserSubscriptionModel>>(url).toPromise();
  }

  public getUsersBySubscription(subscription: SubscriptionModel): Promise<Array<UserSubscriptionModel>> {
    return new Promise<Array<UserSubscriptionModel>>((resolve, reject) => {
      const url = `${environment.apiUrls.security}UserSubscription/getbysubscription/${subscription.id}`;
      this.http.get<Array<UserSubscriptionModel>>(url).toPromise().then(
        userSubscription => {
          const tasks = userSubscription.map<Observable<UserModel>>(value => {
            return this.userService.getByIdObservable(value.userId);
          });
          forkJoin(tasks).subscribe(userModels => {
            userSubscription.forEach((value, index) => {
              value.user = userModels[index];
              value.subscription = subscription;
            });
            resolve(userSubscription);
          }, error => {
            reject(error);
          });
        }
      ).catch(reason => reject(reason));
    });
  }

  public doCreateTestUser(subscription: SubscriptionModel): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.userService.doCreateTestUser()
        .then(value => {
          const chance = new Chance();
          const userSubscription: UserSubscriptionModel = {
            id: chance.guid(),
            userId: value.id,
            user: value,
            creationDate: new Date(),
            isOwner: false,
            deletionDate: null,
            roles: new Array<string>(),
            subscription: subscription,
            subscriptionId: subscription.id
          };
          this.create(userSubscription)
            .then(createdSubscription => {
              resolve(1);
            }).catch(reason => {
              reject(reason);
            });
        }).catch(reason => {
          reject(reason);
        });
    });
  }
}
