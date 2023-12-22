import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonCountComponent } from './delivery-person-count.component';

describe('DeliveryPersonCountComponent', () => {
  let component: DeliveryPersonCountComponent;
  let fixture: ComponentFixture<DeliveryPersonCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryPersonCountComponent]
    });
    fixture = TestBed.createComponent(DeliveryPersonCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
