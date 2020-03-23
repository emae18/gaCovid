import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
