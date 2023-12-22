import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeliveryComponent } from './delete-delivery.component';

describe('DeleteDeliveryComponent', () => {
  let component: DeleteDeliveryComponent;
  let fixture: ComponentFixture<DeleteDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDeliveryComponent]
    });
    fixture = TestBed.createComponent(DeleteDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
