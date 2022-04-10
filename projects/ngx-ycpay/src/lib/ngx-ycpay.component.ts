import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare var YCPay: any;

@Component({
  selector: 'ngx-ycpay',
  template: `
    <div [class]="Class">
      <div [id]="ycError"></div>
      <div [id]="ycForm"></div>
      <button class="btn btn-dark my-1 w-100 p-2" (click)="Pay()">Pay</button>
    </div>
  `,
  styles: []
})
export class NgxYcpayComponent implements OnInit {
  @Input('yc-form')
  ycForm: any = '#ycForm';

  @Input('yc-lang')
  ycLang: any = 'en';

  @Input('yc-sandbox')
  ycSandbox: any = false;

  @Input('yc-error')
  ycError: any = 'ycError';

  @Input('yc-class')
  ycClass: any = '';

  @Input('class')
  Class: any = 'yc-group';

  @Input('yc-publicKey')
  ycPublicKey: any;

  @Output()
  pay: EventEmitter<any> = new EventEmitter();
  private instance: any = undefined;

  constructor() {
    if (!this.ycPublicKey)
      throw 'publicKey Required!';
    else
      this.instance = new YCPay(this.ycPublicKey, {
        formContainer: `#${this.ycForm}`,
        locale: this.ycLang,
        isSandbox: this.ycSandbox,
        errorContainer: `#${this.ycError}`,
        customCss: this.ycClass
      });
  }

  ngOnInit(): void {
  }

  Pay() {
    if (this.instance)
      this.pay.emit(this.instance);
  }
}
