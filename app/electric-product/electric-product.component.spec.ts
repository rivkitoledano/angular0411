import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricProductComponent } from './electric-product.component';

describe('ElectricProductComponent', () => {
  let component: ElectricProductComponent;
  let fixture: ComponentFixture<ElectricProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricProductComponent]
    });
    fixture = TestBed.createComponent(ElectricProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
