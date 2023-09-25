import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../../../core/service/approval.service';
import { GetTandCList } from '../../../core/models/approval.model'
import { MatDialog } from '@angular/material/dialog';
import { InvestorDeclarationComponent } from '../investor-declaration/investor-declaration.component';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-application-review',
  templateUrl: './application-review.component.html',
  styleUrls: ['./application-review.component.scss']
})
export class ApplicationReviewComponent implements OnInit {

  termsAndConditionList!: GetTandCList[];
  trxType!: string;
  declaration = new FormControl(false);

  constructor(
    private applicationService: ApprovalService,
    public dialog: MatDialog,
    private readonly activeRoute: ActivatedRoute
    ){}

  ngOnInit(): void {

    this.trxType = this.activeRoute.snapshot?.params?.trxId as string;
    this.applicationService.getTandCList(this.trxType).subscribe((response)=>{
      this.termsAndConditionList = response;
    })
  }
  /* istanbul ignore next */
  termsAndConditionClick(tnc:GetTandCList):void{
    if(tnc.tncType === 'C'){
      this.applicationService.getTandCContent(tnc.tncId).subscribe((response)=>{
        this.dialog.open(InvestorDeclarationComponent,{
          panelClass: 't-and-c-dialog',
          minWidth: '100%',
          maxWidth: '100%',
          minHeight: '100vh',
          height: '100vh',
          width: '100%',
          data: {
            title: tnc.tncName[tnc.tncName.length-1] === ';' ? tnc.tncName.slice(0,-1) : tnc.tncName,
            description: response.tncContent
          }
        })
      })
    } else if(tnc.tncType === 'U') {
      window.open(tnc.tncUrl, '_blank');
    }
    
  }

}
