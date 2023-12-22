import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeliveryPersonComponent } from './update-delivery-person.component';

describe('UpdateDeliveryPersonComponent', () => {
  let component: UpdateDeliveryPersonComponent;
  let fixture: ComponentFixture<UpdateDeliveryPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDeliveryPersonComponent]
    });
    fixture = TestBed.createComponent(UpdateDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
