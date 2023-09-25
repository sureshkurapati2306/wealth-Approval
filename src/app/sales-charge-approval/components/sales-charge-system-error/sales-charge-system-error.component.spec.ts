import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChargeSystemErrorComponent } from './sales-charge-system-error.component';

describe('SalesChargeSystemErrorComponent', () => {
  let component: SalesChargeSystemErrorComponent;
  let fixture: ComponentFixture<SalesChargeSystemErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesChargeSystemErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesChargeSystemErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
