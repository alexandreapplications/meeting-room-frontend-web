import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EmailModel } from '../models/email.model';
import { PhoneModel } from '../models/phone.model';
const Chance = require('chance');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public get(id: string): Promise<UserModel> {
    return this.getByIdObservable(id).toPromise();
  }

  public getByIdObservable(id: string): Observable<UserModel> {
    const url = `${ environment.apiUrls.security }user/get/${id}`;

    return this.http.get<UserModel>(url);
  }

  public create(model: UserModel): Promise<UserModel> {
    const url = `${ environment.apiUrls.security }user/create`;

    model.id = '00000000-0000-0000-0000-000000000000';

    return this.http.post<UserModel>(url, model).toPromise();
  }

  public update(model: UserModel): Promise<UserModel> {
    const url = `${ environment.apiUrls.security }user/update/${ model.id }`;

    return this.http.put<UserModel>(url, model).toPromise();
  }

  public doCreateTestUser(): Promise<UserModel> {
    const chance = new Chance();
    const qtdEmail = chance.integer({ min: 0, max: 3 });
    const emails = new Array<EmailModel>();
    for (let i = 0; i < qtdEmail; i++) {
      const email: EmailModel = {
        id: chance.guid(),
        type: i === 0 ? 'Main' : 'Other',
        remarks: chance.sentence({ words: 5 }),
        value: chance.email()
      };
      emails.push(email);
    }

    const qtdTelephones = chance.integer({ min: 0, max: 3 });
    const telephones = new Array<PhoneModel>();
    for (let i = 0; i < qtdTelephones; i++) {
      const telephone: PhoneModel = {
        id: chance.guid(),
        type: i === 0 ? 'Main' : 'Other',
        remarks: chance.sentence({ words: 5 }),
        value: chance.phone()
      };
      telephones.push(telephone);
    }
    const qtdPhone = chance.integer({ min: 0, max: 3 });
    const user: UserModel = {
      id: chance.guid(),
      code: chance.ssn(),
      name: chance.name(),
      emails: emails,
      telephones: telephones
    };
    while (user.name.length < 15) {
      user.name = `${user.name} ${ chance.last() }`;
    }

    return this.create(user);
  }
}
