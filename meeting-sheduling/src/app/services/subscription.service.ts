import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubscriptionModel } from '../models/subscription.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }
  private _companyCache = {};

  public create(model: SubscriptionModel): Promise<SubscriptionModel> {
    const url = `${ environment.apiUrls.security }subscription/create`;

    return this.http.put<SubscriptionModel>(url, model).toPromise();
  }

  public getSubscriber(subscriberCode): Promise<SubscriptionModel> {
    return new Promise<SubscriptionModel>((resolve, reject) => {
      if (this._companyCache != null && this._companyCache[subscriberCode] != null) {
         resolve(this._companyCache[subscriberCode]);
         return;
      }
    const url = `${ environment.apiUrls.security }subscription/getByCode/${ subscriberCode }`;
      this.http.get<SubscriptionModel>(url).toPromise().then(subscriptionModel => {
        if (subscriptionModel == null) {
          reject('Subscriber not found');
        } else {
          this._companyCache[subscriberCode] = subscriptionModel;
          resolve(subscriptionModel);

        }
      }).catch(rejectedReason => {
        reject(rejectedReason);
      });
    });
  }
}
