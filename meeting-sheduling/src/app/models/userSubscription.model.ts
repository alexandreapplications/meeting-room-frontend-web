export class UserSubscriptionModel {
    constructor() {
        this.Id = '00000000-0000-0000-0000-000000000000';
        this.Roles = new Array<string>();
    }
    public Id: string;
    public SubscriptionId: string;
    public UserId: string;
    public IsOwner: boolean;
    public Roles: Array<string>;
    public CreationDate?: Date;
    public DeletionDate?: Date;
}
