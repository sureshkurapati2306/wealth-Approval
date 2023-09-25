import { Component } from '@angular/core';

@Component({
  selector: 'app-approval-successfull',
  templateUrl: './approval-successfull.component.html',
  styleUrls: ['./approval-successfull.component.scss']
})
export class ApprovalSuccessfullComponent {

  applicationsRefId = sessionStorage.getItem('applicationsRefId');
  
}
