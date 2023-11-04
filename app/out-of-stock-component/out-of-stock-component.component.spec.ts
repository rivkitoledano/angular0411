import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfStockComponentComponent } from './out-of-stock-component.component';

describe('OutOfStockComponentComponent', () => {
  let component: OutOfStockComponentComponent;
  let fixture: ComponentFixture<OutOfStockComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutOfStockComponentComponent]
    });
    fixture = TestBed.createComponent(OutOfStockComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
