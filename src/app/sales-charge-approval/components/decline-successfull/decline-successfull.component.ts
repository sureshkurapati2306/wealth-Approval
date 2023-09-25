import { Component } from '@angular/core';

@Component({
  selector: 'app-decline-successfull',
  templateUrl: './decline-successfull.component.html',
  styleUrls: ['./decline-successfull.component.scss']
})
export class DeclineSuccessfullComponent  {

  applicationsRefId = sessionStorage.getItem('applicationsRefId');
  
}
