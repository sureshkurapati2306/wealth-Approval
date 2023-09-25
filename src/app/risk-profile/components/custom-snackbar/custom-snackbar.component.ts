import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export interface SnackBarData {
  message: string;
  icon: string;
}

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss']
})
export class CustomSnackbarComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData,
    public _snackRef: MatSnackBarRef<CustomSnackbarComponent>
  ) { }

}
