import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlaceGroupModel } from '../models/place-group.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceGroupService {

  constructor(private http: HttpClient) { }

  public create(model: PlaceGroupModel): Promise<PlaceGroupModel> {
    const url = `${ environment.apiUrls.place }placegroup/create`;

    model.id = '00000000-0000-0000-0000-000000000000';

    return this.http.post<PlaceGroupModel>(url, model).toPromise();
  }

  public update(model: PlaceGroupModel): Promise<PlaceGroupModel> {
    const url = `${ environment.apiUrls.place }placegroup/update/${ model.id }`;

    return this.http.put<PlaceGroupModel>(url, model).toPromise();
  }

  public delete(id: string): Promise<boolean> {
    const url = `${ environment.apiUrls.place }placegroup/delete/${ id }`;

    return this.http.delete<boolean>(url).toPromise();
  }

  public getSingle(id: string): Promise<PlaceGroupModel> {
    const url = `${ environment.apiUrls.place }placegroup/get/${ id }`;

    return this.http.get<PlaceGroupModel>(url).toPromise();
  }

  public getBySubscription(subscriptionId: string): Promise<Array<PlaceGroupModel>> {
    const url = `${ environment.apiUrls.place }placegroup/getbysubscription/${ subscriptionId }`;

    return this.http.get<Array<PlaceGroupModel>>(url).toPromise();
  }
}
