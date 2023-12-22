import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTourComponent } from './delete-tour.component';

describe('DeleteTourComponent', () => {
  let component: DeleteTourComponent;
  let fixture: ComponentFixture<DeleteTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTourComponent]
    });
    fixture = TestBed.createComponent(DeleteTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
