import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonnelsComponent } from './delivery-personnels.component';

describe('DeliveryPersonnelsComponent', () => {
  let component: DeliveryPersonnelsComponent;
  let fixture: ComponentFixture<DeliveryPersonnelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryPersonnelsComponent]
    });
    fixture = TestBed.createComponent(DeliveryPersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
