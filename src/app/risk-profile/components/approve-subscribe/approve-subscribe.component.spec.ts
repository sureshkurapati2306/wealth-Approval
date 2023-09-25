import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { ApproveSubscribeComponent } from './approve-subscribe.component';

describe('ApproveSubscribeComponent', () => {
  let component: ApproveSubscribeComponent;
  let fixture: ComponentFixture<ApproveSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveSubscribeComponent ],
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        StoreModule.forRoot({}),
        RouterTestingModule,
        MatExpansionModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should call openDialog', () => {
    const dialogSpy = jest.spyOn(component.dialog, 'open');
    component.decline();
    expect(dialogSpy).toHaveBeenCalled();
  });
  it('should close the dialog', (done) => {
    const dialogSpy = jest.spyOn(component, 'openDecline').mockReturnValue(of(true));
    component.decline();
    component.openDecline().subscribe(res => {
      expect(res).toBe(true);
      expect(dialogSpy).toHaveBeenCalled();
      done()
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
