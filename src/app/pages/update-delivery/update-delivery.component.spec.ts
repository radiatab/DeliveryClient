import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeliveryComponent } from './update-delivery.component';

describe('UpdateDeliveryComponent', () => {
  let component: UpdateDeliveryComponent;
  let fixture: ComponentFixture<UpdateDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDeliveryComponent]
    });
    fixture = TestBed.createComponent(UpdateDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
