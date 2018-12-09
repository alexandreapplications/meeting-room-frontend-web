import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlaceModel } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  public create(model: PlaceModel): Promise<PlaceModel> {
    const url = `${ environment.apiUrls.place }place/create`;

    model.id = '00000000-0000-0000-0000-000000000000';

    return this.http.post<PlaceModel>(url, model).toPromise();
  }

  public update(model: PlaceModel): Promise<PlaceModel> {
    const url = `${ environment.apiUrls.place }place/update/${ model.id }`;

    return this.http.put<PlaceModel>(url, model).toPromise();
  }

  public delete(id: string): Promise<boolean> {
    const url = `${ environment.apiUrls.place }place/delete/${ id }`;

    return this.http.delete<boolean>(url).toPromise();
  }

  public getSingle(id: string): Promise<PlaceModel> {
    const url = `${ environment.apiUrls.place }place/get/${ id }`;

    return this.http.get<PlaceModel>(url).toPromise();
  }

  public getBySubscription(subscriptionId: string): Promise<Array<PlaceModel>> {
    const url = `${ environment.apiUrls.place }place/getbysubscription/${ subscriptionId }`;

    return this.http.get<Array<PlaceModel>>(url).toPromise();
  }
}
