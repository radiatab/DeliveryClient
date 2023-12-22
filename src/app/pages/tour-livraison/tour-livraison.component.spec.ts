import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourLivraisonComponent } from './tour-livraison.component';

describe('TourLivraisonComponent', () => {
  let component: TourLivraisonComponent;
  let fixture: ComponentFixture<TourLivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourLivraisonComponent]
    });
    fixture = TestBed.createComponent(TourLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
