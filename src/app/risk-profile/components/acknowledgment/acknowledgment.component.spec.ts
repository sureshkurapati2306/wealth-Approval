import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgmentComponent } from './acknowledgment.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from '@angular/router';

describe('AcknowledgmentComponent', () => {
  let component: AcknowledgmentComponent;
  let fixture: ComponentFixture<AcknowledgmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcknowledgmentComponent ],
      imports:[StoreModule.forRoot({}), RouterTestingModule],
      providers:[AcknowledgmentComponent, { provide: ActivatedRoute,useValue: {snapshot: {params: {'trxId': '123'}}}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowledgmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
