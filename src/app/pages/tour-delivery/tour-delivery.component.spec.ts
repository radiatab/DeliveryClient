import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDeliveryComponent } from './tour-delivery.component';

describe('TourDeliveryComponent', () => {
  let component: TourDeliveryComponent;
  let fixture: ComponentFixture<TourDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourDeliveryComponent]
    });
    fixture = TestBed.createComponent(TourDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
