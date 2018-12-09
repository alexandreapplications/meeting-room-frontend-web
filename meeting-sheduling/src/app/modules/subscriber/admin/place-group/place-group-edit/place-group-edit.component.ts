import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlaceGroupService } from 'src/app/services/place-group.service';
import { MatSnackBar } from '@angular/material';
import { PlaceGroupModel } from 'src/app/models/place-group.model';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { SubscriptionModel } from 'src/app/models/subscription.model';

@Component({
  selector: 'mrs-place-group-edit',
  templateUrl: './place-group-edit.component.html',
  styleUrls: ['./place-group-edit.component.scss']
})
export class PlaceGroupEditComponent implements OnInit {

  public _company: string;
  public _id: string;
  private _subscription: SubscriptionModel;
  public _recordForm: FormGroup;
  public _isNew: boolean;
  private _guidRegex = /^[\da-zA-Z]{8}-([\da-zA-Z]{4}-){3}[\da-zA-Z]{12}$/g;
  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
    private placeGroupService: PlaceGroupService,
    private snackBar: MatSnackBar) {
    this._company = activeRoute.snapshot.params['company'];
    this._id = activeRoute.snapshot.params['id'];
    this._isNew = !this._guidRegex.test(this._id);
  }

  ngOnInit() {
    this.subscriptionService.getSubscriber(this._company)
      .then(subscriberModelResult => {
        this._subscription = subscriberModelResult;
        if (this._isNew) {
          const emptyRecord: PlaceGroupModel = {
            id: null,
            code: null,
            name: null,
            building: null,
            enabled: true,
            subscriberId: this._subscription.id
          };
          this.setRecordForm(emptyRecord);
        } else {
          this.placeGroupService.getSingle(this._id).then(
            value => {
              this.setRecordForm(value);
            }
          );
        }
      }).catch(x => { alert(x), console.error(x); });
  }

  public setRecordForm(record: PlaceGroupModel) {
    this._recordForm = this.formBuilder.group({
      id: [record.id],
      code: [record.code, [Validators.required, Validators.minLength(5)]],
      subscriberId: this._subscription.id,
      name: [record.name, [Validators.required, Validators.minLength(15)]],
      building: [record.building, [Validators.required, Validators.minLength(15)]],
      enabled: record.enabled
    });
  }

  public onSubmit() {
    const record = new PlaceGroupModel;

    Object.assign(record, this._recordForm.value);
    if (this._isNew) {
      this.placeGroupService.create(record).then(x => {
        this.setRecordForm(x);
        this.snackBar.open('Created', x.id, {
          duration: 2000
        });
        this.router.navigate(['/', this._company, 'admin', 'placegroup']);
      }).catch(reason => {
        this.snackBar.open('Error', reason);
      });
    } else {
      this.placeGroupService.update(record).then(x => {
        this.setRecordForm(x);
        this.snackBar.open('Updated', x.id, {
          duration: 2000
        });
        this.router.navigate(['/', this._company, 'admin', 'placegroup']);
      }).catch(reason => this.snackBar.open('Error', reason));
    }
  }
}
