import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AnswerOption, RPQuestionaire, RPQuestionnaireRequest } from '../../models/risk-inquiry-detail.model';
import { IRPQuestionarie } from '../../models/risk-profile-summary.model';
import { RiskProfileService } from '../../service/risk-profile.service';
import { DeclineDialogComponent } from '../decline-dialog/decline-dialog.component';

@Component({
  selector: 'app-risk-profile-detail',
  templateUrl: './risk-profile-detail.component.html',
  styleUrls: ['./risk-profile-detail.component.scss']
})
export class RiskProfileDetailComponent implements OnInit {

  rpqQuestionarie!: Observable<IRPQuestionarie[]>;
  constructor(
    private riskprofileservice: RiskProfileService,
    private readonly _dialog: MatDialog,
    private readonly _router: Router
  ) { }
  ngOnInit(): void {
    this.getQuestioniore()
  }

  /* istanbul ignore next */
  getImageId(option: string): number {
    if (option.startsWith('Portfolio A')) return 1;
    if (option.startsWith('Portfolio B')) return 2;
    if (option.startsWith('Portfolio C')) return 3;
    if (option.startsWith('Portfolio D')) return 4;
    if (option.startsWith('Portfolio E')) return 5;
    return null || 0;
  }

  getQuestioniore(): void {
    const payload: RPQuestionnaireRequest = {
      cifNumber: '10330000219671'
    }
    this.rpqQuestionarie = this.riskprofileservice.getQuestions(payload).pipe(
      filter(res => !!res),
      map(data => {
        const questionWithOption = data.RPQuestionaire;
        const rpqQuestionaire: IRPQuestionarie[] = [];
        questionWithOption.forEach((q: RPQuestionaire, index: number) => {
          const answerDesc = q.answer_options.find((o: AnswerOption) => o.answer_no === q.previous_answer_selected[0])?.answer_desc;
          const obj = {
            additional: q.additional ? q.additional : '',
            questionDesc: q.question_desc,
            questionNumber: index + 1,
            optionsDesc: answerDesc ? answerDesc : '',
          }
          rpqQuestionaire.push(obj);
        })

        return rpqQuestionaire;
      }))
  }

  decline(): void {
   this.openDeclinePopUp().subscribe((res) => {
      if(res) {
        void this._router.navigate(['/risk-profile/decline'])
      }
   });
  }

  openDeclinePopUp(): Observable<boolean> {
    return this._dialog.open(DeclineDialogComponent, {
        panelClass: ['custom-dialog', 'decline-dialog'],
        minWidth: '100%',
        maxWidth: '100%',
        minHeight: '100vh',
        height: '100vh',
        width: '100%',
        autoFocus: false,
        backdropClass: 'backdrop-modal',
    }).afterClosed() as Observable<boolean>
  }
}
