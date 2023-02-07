import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserModel } from '../../../interface/user.model';
import { LoginModel } from '../../../interface/login.Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private router: Router, public $authService: AuthService) {
    this.formLogin = new FormGroup({
      userUsername: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}


  loginFire(proveedor: string) {
    let user: LoginModel = {
      email: this.formLogin.value.userUsername,
      password: this.formLogin.value.userPassword,
    };
    console.log(user);

    switch (proveedor) {
      case 'google':
        this.$authService.loginWithGoogle().then(
          (res) => {
            console.log('Usuario loggeado con exito', res);
            this.router.navigate(['/dashboard/home']);
          },
          (err) => {
            console.log('Error al crear usuario', err);
            alert('Usuario o contraseña incorrectos');
          }
        );
        break;
      case 'emailandpassword':
        this.$authService.login(user).then(
          (res) => {
            console.log('Usuario loggeado con exito', res);
            alert('Usuario loggeado con exito');
            this.router.navigate(['/dashboard/home']);
          },
          (err) => {
            console.log('Error al crear usuario', err);
            alert('Usuario o contraseña incorrectos');
          }
        );
        break;
      default:
        alert('Este metodo de login aun no ha sido implementado');
        break;
    }


  }
}
