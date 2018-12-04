import { EmailModel } from './email.model';
import { PhoneModel } from './phone.model';

export class SubscriptionModel {
    public constructor() {
        this.id = '00000000-0000-0000-0000-000000000000';
        this.emails = new Array<EmailModel>();
        this.telephones = new Array<PhoneModel>();
    }
    public id: string;
    public code: string;
    public name: string;
    public emails: Array<EmailModel>;
    public telephones: Array<PhoneModel>;
    public remarks: string;
}
