import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public get(id: string): Promise<UserModel> {
    const url = `${ environment.apiUrls.security }user/get/${id}`;

    return this.http.get<UserModel>(url).toPromise();
  }

  public create(model: UserModel): Promise<UserModel> {
    const url = `${ environment.apiUrls.security }user/create`;

    model.id = '00000000-0000-0000-0000-000000000000';

    return this.http.put<UserModel>(url, model).toPromise();
  }

  public update(model: UserModel): Promise<UserModel> {
    const url = `${ environment.apiUrls.security }user/update`;

    return this.http.post<UserModel>(url, model).toPromise();
  }
}
