import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionModel } from 'src/app/models/subscription.model';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { PlaceModel } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';
import { ConfirmDeletionComponent } from '../../../_shared/parts/confirm-deletion/confirm-deletion.component';
import { PlaceGroupModel } from 'src/app/models/place-group.model';
import { PlaceGroupService } from 'src/app/services/place-group.service';

@Component({
  selector: 'mrs-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

  public _company: string;
  public _id: string;
  private _subscription: SubscriptionModel;
  public _recordForm: FormGroup;
  public _placeGroupList: Array<PlaceGroupModel>;
  public _isNew: boolean;
  private _guidRegex = /^[\da-zA-Z]{8}-([\da-zA-Z]{4}-){3}[\da-zA-Z]{12}$/g;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
    private placeService: PlaceService,
    private placeGroupService: PlaceGroupService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) {
    this._company = activeRoute.snapshot.params['company'];
    this._id = activeRoute.snapshot.params['id'];
    this._isNew = !this._guidRegex.test(this._id);
  }

  ngOnInit() {
    this.subscriptionService.getSubscriber(this._company)
      .then(subscriberModelResult => {
        this._subscription = subscriberModelResult;
        this.placeGroupService.getBySubscription(subscriberModelResult.id)
          .then(placeGroupList => {
            this._placeGroupList = placeGroupList;
            if (this._isNew) {
              const emptyRecord: PlaceModel = {
                id: null,
                code: null,
                name: null,
                infrastructure: [],
                locationDescription: null,
                maxUsers: 0,
                optionalInfrastructure: [],
                placeGroup: new PlaceGroupModel(),
                subscriberId: this._subscription.id
              };
              this.setRecordForm(emptyRecord);
            } else {
              this.placeService.getSingle(this._id).then(
                value => {
                  this.setRecordForm(value);
                }
              );
            }
          }).catch(x => { alert(x), console.error(x); });
      }).catch(x => { alert(x), console.error(x); });
  }

  public setRecordForm(record: PlaceModel) {
    this._recordForm = this.formBuilder.group({
      id: record.id,
      subscriberId: this._subscription.id,
      placeGroupId: record.placeGroup.id,
      code: [record.code, [Validators.required, Validators.minLength(5)]],
      name: [record.name, [Validators.required, Validators.minLength(5)]],
      locationDescription: [record.locationDescription, [Validators.minLength(15)]],
      maxUsers: [record.maxUsers, [Validators.required, Validators.min(0)]],
      infrastructureAdd: ['', [Validators.minLength(10)]],
      infrastructure: this.formBuilder.array(record.infrastructure.map<FormControl>(value => {
        return this.formBuilder.control(value);
      })),
      optionalInfrastructureAdd: ['', [Validators.minLength(10)]],
      optionalInfrastructure: this.formBuilder.array(record.optionalInfrastructure.map<FormControl>(value => {
        return this.formBuilder.control(value);
      }))
    });
    // infrastructure
    // optionalInfrastructure
  }

  public addItem(array: FormArray, item: FormControl) {
    if (item.valid && item.value !== '') {
      array.push(this.formBuilder.control(item.value));
      item.setValue('');
    }
  }

  public removeItem(formArray: FormArray, formControlIndex: number) {
    const dialogRef = this.dialog.open(ConfirmDeletionComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        formArray.removeAt(formControlIndex);
      }
    });
  }

  get infrastructure(): FormArray {
    return this._recordForm.get('infrastructure') as FormArray;
  }

  get optionalInfrastructure(): FormArray {
    return this._recordForm.get('optionalInfrastructure') as FormArray;
  }

  public onSubmit() {
    const record = new PlaceModel;

    Object.assign(record, this._recordForm.value);
    record.placeGroup = new PlaceGroupModel();
    record.placeGroup.id = this._recordForm.value.subscriberId;
    if (this._isNew) {
      this.placeService.create(record).then(x => {
        this.setRecordForm(x);
        this.snackBar.open('Created', x.id, {
          duration: 2000
        });
        this.router.navigate(['/', this._company, 'admin', 'place']);
      }).catch(reason => {
        this.snackBar.open('Error', reason);
      });
    } else {
      this.placeService.update(record).then(x => {
        this.setRecordForm(x);
        this.snackBar.open('Updated', x.id, {
          duration: 2000
        });
        this.router.navigate(['/', this._company, 'admin', 'place']);
      }).catch(reason => {
        this.snackBar.open('Error', reason);
      });
    }
  }
}
