import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent {

  // eslint-disable-next-line @typescript-eslint/unbound-method
  declaration: FormControl = new FormControl('', [ Validators.required ])
  constructor(
    private readonly _router: Router
  ) { }

  submit(): void {
    void this._router.navigate(['/risk-profile/confirmation'])
  }

}
