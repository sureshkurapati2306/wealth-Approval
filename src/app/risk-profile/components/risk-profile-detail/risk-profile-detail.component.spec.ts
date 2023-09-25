import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MockRPQuestionaireResponse } from '../../mock/risk-profile-questionire.mock';
import { RiskProfileService } from '../../service/risk-profile.service';
import { RiskProfileDetailComponent } from './risk-profile-detail.component';

class MockRiskProfileService {
  getQuestions() { /* mock */ }
}

describe('RiskProfileDetailComponent', () => {
  let component: RiskProfileDetailComponent;
  let fixture: ComponentFixture<RiskProfileDetailComponent>;
  let riskProfileService: RiskProfileService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskProfileDetailComponent ],
      imports: [
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        RouterTestingModule,
        MatDialogModule
      ],
      providers: [
        { provide: RiskProfileService, useClass: MockRiskProfileService }
      ]
    })
    .compileComponents();

    riskProfileService = TestBed.inject(RiskProfileService);

  });

  beforeEach(() => {
    jest.spyOn(riskProfileService, 'getQuestions').mockReturnValue(of(MockRPQuestionaireResponse));
    fixture = TestBed.createComponent(RiskProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
