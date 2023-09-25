import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { DeclineDialogComponent } from './decline-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { GetDeclineCustTrx } from '../../models/declaration.model';
import { FormControl } from '@angular/forms';

class MockDialogRef {
  close() { /* mock */ }
}

const MockReason = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Massa id neque aliquam vestibulum morbi blandit cursus risus. Vel fringilla est ullamcorper eget nulla facilisi. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Semper quis lectus nulla at. Sed viverra tellus in hac habitasse platea. Eget sit amet tellus cras. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Sed augue lacus viverra vitae congue eu consequat. Augue neque gravida in fermentum et sollicitudin ac. Non diam phasellus vestibulum lorem sed risus. Pulvinar elementum integer enim neque. Tristique senectus et netus et. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris."

describe('DeclineDialogComponent', () => {
  let component: DeclineDialogComponent;
  let fixture: ComponentFixture<DeclineDialogComponent>;
  let dialogRef: MatDialogRef<DeclineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeclineDialogComponent],
      imports: [StoreModule.forRoot({})],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useClass: MockDialogRef }],
    })
      .compileComponents();
    dialogRef = TestBed.inject(MatDialogRef) as MatDialogRef<DeclineDialogComponent>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog if decline success', () => {
    const response: GetDeclineCustTrx = {
      trxStatus: "true",
      trxUpdateDate: new Date().toString(),
    }
    component.riskProfileDecline$ = of(response);
    const spy = jest.spyOn(dialogRef, 'close');

    component.declineSubmit();

    expect(spy).toBeCalled();
  });

  it('should check for reason value change', fakeAsync(() => {
    component.reason = new FormControl('');
    component.ngOnInit();

    component.reason.patchValue(MockReason);

    tick(200);

    expect((component.reason.value as string).length).toBe(500);
  }))
});
