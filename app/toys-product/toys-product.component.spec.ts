import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysProductComponent } from './toys-product.component';

describe('ToysProductComponent', () => {
  let component: ToysProductComponent;
  let fixture: ComponentFixture<ToysProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToysProductComponent]
    });
    fixture = TestBed.createComponent(ToysProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
