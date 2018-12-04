import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserModel } from 'src/app/models/user.Model';
import { UserService } from 'src/app/services/user.service';
import { EmailModel } from 'src/app/models/email.model';
import { PhoneModel } from 'src/app/models/phone.model';

@Component({
  selector: 'mrs-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public _company: string;
  public _id: string;
  public _recordForm: FormGroup;
  public _isNew: boolean;
  private _guidRegex = /^[\da-zA-Z]{8}-([\da-zA-Z]{4}-){3}[\da-zA-Z]{12}$/g;
  constructor(private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService) {
    this._company = activeRoute.snapshot.params['company'];
    this._id = activeRoute.snapshot.params['id'];
    this._isNew = !this._guidRegex.test(this._id);
  }

  ngOnInit() {
    if (this._isNew) {
      this.setRecordForm(new UserModel());
    } else {
      const record = this.userService.get(this._id).then(
        value => {
          this.setRecordForm(value);
        }
      );
    }
  }

  public setRecordForm(record: UserModel) {
    this._recordForm = this.formBuilder.group({
      id: [record.id],
      code: [record.code, [Validators.required, Validators.minLength(5)]],
      name: [record.name, [Validators.required, Validators.minLength(15)]],
      telephones: this.formBuilder.array(record.telephones.map(value => this.getPhoneGroup(value))),
      emails: this.formBuilder.array(record.emails.map(value => this.getEmailGroup(value)))
    });
  }

  private getEmailGroup(record: EmailModel): FormGroup {
    return this.formBuilder.group({
      id: record.id,
      type: [record.type, [Validators.required]],
      value: [record.value, [Validators.required, Validators.email]],
      remarks: [record.remarks, [Validators.minLength(5)]]
    });
  }

  public addNewEmailGroup() {
    const newGroup = this.getEmailGroup(new EmailModel());
    this.emails.push(newGroup);
  }

  private getPhoneGroup(record: PhoneModel): FormGroup {
    return this.formBuilder.group({
      id: record.id,
      type: [record.type, [Validators.required]],
      value: [record.value, [Validators.required, Validators.minLength(5)]],
      remarks: [record.remarks, [Validators.minLength(5)]]
    });
  }

  public addNewPhoneGroup() {
    const newGroup = this.getPhoneGroup(new PhoneModel());
    this.telephones.push(newGroup);
  }

  get telephones(): FormArray {
    return this._recordForm.get('telephones') as FormArray;
  }
  get emails(): FormArray {
    return this._recordForm.get('emails') as FormArray;
  }
  public onSubmit() {
    const record = new UserModel;

    Object.assign(record, this._recordForm.value);
    if (this._isNew) {
        this.userService.create(record).then(x => {
          this.setRecordForm(x);
          alert(`Created: ${x.id}`);
        }
      );
    } else {
      this.userService.update(record).then(x => {
          this.setRecordForm(x);
          alert(`Update: ${x.id}`);
      });
    }
  }
}
