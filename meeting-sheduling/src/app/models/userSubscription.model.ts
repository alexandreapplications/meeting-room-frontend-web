import { UserModel } from "./user.model";
import { SubscriptionModel } from "./subscription.model";

export class UserSubscriptionModel {
    constructor() {
        this.id = '00000000-0000-0000-0000-000000000000';
        this.roles = new Array<string>();
    }
    public id: string;
    public subscriptionId: string;
    public userId: string;
    public isOwner: boolean;
    public roles: Array<string>;
    public creationDate?: Date;
    public deletionDate?: Date;
    public user?: UserModel;
    public subscription?: SubscriptionModel;
}
