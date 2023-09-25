import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorDeclarationComponent } from './investor-declaration.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('InvestorDeclarationComponent', () => {
  let component: InvestorDeclarationComponent;
  let fixture: ComponentFixture<InvestorDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorDeclarationComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorDeclarationComponent);
    component = fixture.componentInstance;
    component.dialogData = {
      description: "[{}]",
      title: ''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
