import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonSearchComponent } from './delivery-person-search.component';

describe('DeliveryPersonSearchComponent', () => {
  let component: DeliveryPersonSearchComponent;
  let fixture: ComponentFixture<DeliveryPersonSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryPersonSearchComponent]
    });
    fixture = TestBed.createComponent(DeliveryPersonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
