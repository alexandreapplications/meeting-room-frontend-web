import { PlaceGroupModel } from './place-group.model';

export class PlaceModel {
    /// <summary>
    /// Place identification
    /// </summary>
    public id: string;
    /// <summary>
    /// Subscriber
    /// </summary>
    public subscriberId: string;
    /// <summary>
    /// Place Group
    /// </summary>
    public placeGroup: PlaceGroupModel;
    /// <summary>
    /// Code
    /// </summary>
    public code: string;
    /// <summary>
    /// Name
    /// </summary>
    public name: string;
    /// <summary>
    /// Location description
    /// </summary>
    public locationDescription: string;
    /// <summary>
    /// Max users the place can accept
    /// </summary>
    public maxUsers: number;
    /// <summary>
    /// Infrastructure of the place
    /// </summary>
    /// <example>Television, datashow</example>
    public infrastructure: string[];
    /// <summary>
    /// Optional infrastructure
    /// </summary>
    /// <example>Coffe, cutelary, ...</example>
    public optionalInfrastructure: string[];
}
