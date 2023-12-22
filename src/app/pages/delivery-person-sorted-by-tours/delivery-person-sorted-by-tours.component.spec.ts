import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonSortedByToursComponent } from './delivery-person-sorted-by-tours.component';

describe('DeliveryPersonSortedByToursComponent', () => {
  let component: DeliveryPersonSortedByToursComponent;
  let fixture: ComponentFixture<DeliveryPersonSortedByToursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryPersonSortedByToursComponent]
    });
    fixture = TestBed.createComponent(DeliveryPersonSortedByToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
