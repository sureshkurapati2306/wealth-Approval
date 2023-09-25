
import { TestBed } from '@angular/core/testing';

import { SnackBarService } from './snack-bar.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../components/custom-snackbar/custom-snackbar.component';

class MockMatSnackBar {
  openFromComponent() { /* mock */ }
  dismiss() { /* mock */ }
}

describe('SnackBarService', () => {
  let service: SnackBarService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      declarations: [CustomSnackbarComponent],
      providers: [
        { provide: MatSnackBar, useClass: MockMatSnackBar }
      ]
    });

    service = TestBed.inject(SnackBarService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open the MatSnack bar', () => {
    const spy = jest.spyOn(snackBar, 'openFromComponent');
    service.openSnackBar("Testing", "success");
    expect(spy).toHaveBeenCalledWith(CustomSnackbarComponent, {
      panelClass: "success",
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 5000,
      data: {
          message: "Testing",
          icon: 'check_circle'
      }
    })
  });

  it('should open the MatSnack bar', () => {
    const spy = jest.spyOn(snackBar, 'openFromComponent');
    service.openSnackBar("Testing", "warning");
    expect(spy).toHaveBeenCalledWith(CustomSnackbarComponent, {
      panelClass: "warning",
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 5000,
      data: {
          message: "Testing",
          icon: 'error'
      }
    })
  });

  it('should dismiss the snackbar on close', () => {
    const spy = jest.spyOn(snackBar, 'dismiss');
    service.closeSnackBar();

    expect(spy).toBeCalled();
  })


});
