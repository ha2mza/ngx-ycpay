import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxYcpayComponent } from './ngx-ycpay.component';

describe('NgxYcpayComponent', () => {
  let component: NgxYcpayComponent;
  let fixture: ComponentFixture<NgxYcpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxYcpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxYcpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
