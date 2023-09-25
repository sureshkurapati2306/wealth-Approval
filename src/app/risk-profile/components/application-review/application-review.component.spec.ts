import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationReviewComponent } from './application-review.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from "@angular/router/testing";
import { MockGetTandCList } from '../../../core/mock/approval.mock';


describe('ApplicationReviewComponent', () => {
  let component: ApplicationReviewComponent;
  let fixture: ComponentFixture<ApplicationReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        MatDialogModule,
        RouterTestingModule
      ],
        providers: [
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} }],
      declarations: [ ApplicationReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInit', () => {
    component.ngOnInit();
    component.termsAndConditionList = MockGetTandCList;
    expect(component.termsAndConditionList).toBeTruthy();
  });
});
