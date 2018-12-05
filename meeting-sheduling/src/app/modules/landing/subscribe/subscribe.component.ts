import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionModel } from 'src/app/models/subscription.model';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UserSubscriptionService } from 'src/app/services/user-subscription.service';
import { UserSubscriptionModel } from 'src/app/models/userSubscription.model';

@Component({
  selector: 'mrs-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  public _recordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private subscriptionService: SubscriptionService,
    private userSubscriptionService: UserSubscriptionService) { }

  ngOnInit() {
    this._recordForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, Validators.minLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.minLength(8)]],
      subscriberCode: ['', [Validators.required, Validators.minLength(5)]],
      subscriberName: ['', [Validators.required, Validators.minLength(15)]],
      subscriberEmail: ['', [Validators.required, Validators.email]],
      subscriberRemarks: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  public onSubmit() {
    if (this._recordForm.valid) {
      const userModel: UserModel  = {
        id: null,
        code: this._recordForm.value.code,
        name: this._recordForm.value.name,
        emails: [{
          id: null,
          type: 'Main',
          remarks: null,
          value: this._recordForm.value.subscriberEmail
        }],
        telephones: [{
          id: null,
          type: 'Main',
          remarks: null,
          value: this._recordForm.value.telephone
        }]
      };

      const subscriberModel: SubscriptionModel  = {
        id: '00000000-0000-0000-0000-000000000000',
        code: this._recordForm.value.subscriberCode,
        name: this._recordForm.value.subscriberName,
        emails: [{
          id: '00000000-0000-0000-0000-000000000000',
          type: 'Main',
          remarks: null,
          value: this._recordForm.value.subscriberEmail
        }],
        telephones: [],
        remarks: this._recordForm.value.subscriberRemarks
      };
      this.subscriptionService.create(subscriberModel).then(valueSubscription => {
        this.userService.create(userModel).then(valueUser => {
          const userSubscriptionModel: UserSubscriptionModel = {
            id: '00000000-0000-0000-0000-000000000000',
            subscriptionId: valueSubscription.id,
            userId: valueUser.id,
            isOwner: true,
            creationDate: new Date(),
            deletionDate: null,
            roles: new Array<string>()
          };
          this.userSubscriptionService.create(userSubscriptionModel).then(valueUserSubs => {
            alert('Funcionou');
          });
        });
      });
    }
  }
}
