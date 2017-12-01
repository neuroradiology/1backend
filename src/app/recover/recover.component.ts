import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstService } from '../const.service';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RecoverComponent implements OnInit {
  email: string;

  constructor(
    private http: HttpClient,
    private _const: ConstService,
    private notif: NotificationsService
  ) {}

  ngOnInit() {}

  sendReset() {
    this.http
      .post(this._const.url + '/v1/send-reset', {
        'email': this.email
      })
      .subscribe(
        rsp => {
          this.notif.success('Email has been sent');
        },
        error => {
          this.notif.error('Something went wrong');
        }
      );
  }
}