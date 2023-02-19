import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LoginModel } from '../../../interface/login.Model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formCreate: FormGroup;
  regexPass: string =
    '^((?=.*[d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^wds])|(?=.*[d])(?=.*[A-Z])(?=.*[^wds])|(?=.*[d])(?=.*[a-z])(?=.*[^wds])).{7,30}$';
  regexEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(private router: Router, public $authService: AuthService) {
    this.formCreate = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        this.validateRequired.bind(this),
        Validators.maxLength(100),
      ]),
      userUsername: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        this.validateUsername.bind(this),
        this.validateRequired.bind(this),
      ]),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.pattern(this.regexEmail),
      ]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(this.regexPass),
      ]),
    });
  }

  ngOnInit(): void {}

  validateUsername(control: AbstractControl) {
    return control.value.length > 20
      ? { invalidOrder: ' must be less than 20 characters' }
      : null;
  }
  validateRequired(control: AbstractControl) {
    return control.value === ''
      ? { invalidOrder: ' is a required field' }
      : null;
  }

  submitCreateUser() {
    console.log(this.formCreate.getRawValue());
    let user: LoginModel = {
      email: this.formCreate.get('userEmail')?.value,
      password: this.formCreate.get('userPassword')?.value,
    };
    console.log('Usuario Registrado: ', user);
    this.$authService.register(user);
    alert('Usuario Registrado Correctamente');
    this.router.navigate(['/login']);
  }
}
