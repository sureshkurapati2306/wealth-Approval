import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RiskProfileService } from '../../service/risk-profile.service';
import { SnackBarService } from '../../service/snack-bar.service';
import { StoreModule } from '@ngrx/store';
import { FundDocumentDownloadModalComponent } from './fund-document-download-modal.component';
import { MockGetFundDocumentsSuccess } from '../../../core/mock/approval.mock';
import { of, throwError } from 'rxjs';
import * as FileSaver from 'file-saver';
import { HttpErrorResponse } from '@angular/common/http';

declare const global: any;
class MockRiskProfileService {
  downloadDocument() { /* mock */ }
}

class MockSnackBarService {
  openSnackBar() { /* mock */ }
  closeSnackBar() { /* mock */ }
}

class MockMatDialogRef {
  close() { /* mock */ }
}


describe('FundDocumentDownloadModalComponent', () => {
  let component: FundDocumentDownloadModalComponent;
  let fixture: ComponentFixture<FundDocumentDownloadModalComponent>;
  let snackbar: SnackBarService;
  let dialogRef: MatDialogRef<FundDocumentDownloadModalComponent>;
  let service: RiskProfileService;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundDocumentDownloadModalComponent ],
      imports:[StoreModule.forRoot({})],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useClass: MockMatDialogRef },
        { provide: RiskProfileService, useClass: MockRiskProfileService },
        { provide: SnackBarService, useClass: MockSnackBarService }
      ]
    })
    .compileComponents();

    service = TestBed.inject(RiskProfileService);
    snackbar = TestBed.inject(SnackBarService);
    dialogRef = TestBed.inject(MatDialogRef) as MatDialogRef<FundDocumentDownloadModalComponent>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDocumentDownloadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close snackbar when hit close', () => {
    const snakbarSpy = jest.spyOn(snackbar, 'closeSnackBar');
    const dialogRefSpy = jest.spyOn(dialogRef, 'close');

    component.close();

    expect(snakbarSpy).toBeCalled();
    expect(dialogRefSpy).toBeCalled();
  });

  it('should take download document success path', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    global.URL.createObjectURL = jest.fn();
    jest.spyOn(service, 'downloadDocument').mockReturnValue(of(new Blob(['abc'], {type: 'application/pdf'})));
    const snakbarSpy = jest.spyOn(snackbar, 'openSnackBar');
    const fileSaverSpy = jest.spyOn(FileSaver, 'saveAs');
    component.downloadDocument(MockGetFundDocumentsSuccess[0]);


    expect(fileSaverSpy).toBeCalled();
    expect(snakbarSpy).toHaveBeenCalledWith("Fund document downloaded successfully!", 'success');
  })

  it('should take download document error path', () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    global.URL.createObjectURL = jest.fn();
    jest.spyOn(service, 'downloadDocument').mockReturnValue(throwError(errorResponse));
    const snakbarSpy = jest.spyOn(snackbar, 'openSnackBar');

    component.downloadDocument(MockGetFundDocumentsSuccess[0]);

    expect(snakbarSpy).toHaveBeenCalledWith("Fund document failed to download. Please try again.", 'warning');
  })

});
