import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../core/models/approval.model';

interface DialogHtmlContent {
  content:string;
  name?:string
}

interface DialogContent {
  type:string;
  class:string;
  HTMLContent:DialogHtmlContent[]
}

@Component({
  selector: 'app-investor-declaration',
  templateUrl: './investor-declaration.component.html',
  styleUrls: ['./investor-declaration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InvestorDeclarationComponent implements OnInit {

  dialogData:DialogData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
  public dialogRef: MatDialogRef<InvestorDeclarationComponent>,
  private elementRef: ElementRef<HTMLElement>) {
    this.dialogData = { 
      ...data,
    };
  }
  
  dataSet!: DialogContent[];
  mat_header = false;

  ngOnInit(): void {
      this.dataSet = JSON.parse(this.dialogData.description) as DialogContent[];
      if(this.dataSet[0].type === 'mat-tab'){
        this.mat_header = true;
      }
  }

}
