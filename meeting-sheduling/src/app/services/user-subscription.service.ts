import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSubscriptionModel } from '../models/userSubscription.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSubscriptionService {


  constructor(private http: HttpClient) { }

  public create(model: UserSubscriptionModel): Promise<UserSubscriptionModel> {
    const url = `${ environment.apiUrls.security }UserSubscription/create`;

    return this.http.put<UserSubscriptionModel>(url, model).toPromise();
  }
}
