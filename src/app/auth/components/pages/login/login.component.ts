import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LoginModel } from '../../../interface/login.Model';
import { SwalService } from 'src/app/services/notifications/swal.service';
import { ImagesService } from 'src/app/services/notifications/images.service';
import { CardModel } from 'src/app/auth/interface/card.model';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  suscriptionApi!: Subscription;

  constructor(public $api: ApiService, private router: Router,public $swal: SwalService, public $authService: AuthService, public $imgService: ImagesService) {
    this.formLogin = new FormGroup({
      userUsername: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }


  ngOnInit(): void {
   this.suscriptionApi=this.$api.getCardsFirebase().subscribe
    ((data: CardModel[]) => {
      if (data.length < 1) {
         this.$swal.mappingData('Mapping data from API',this.$imgService.imageGetting).then
          (() => {
            this.$api.mapData();
          });
      }
      });
  }

  ngOnDestroy(): void {
    this.suscriptionApi.unsubscribe();
  }


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
            this.$swal.confirmationAnimated('User successfully logged in', this.$imgService.imageHappy).then
            ((result) => {
              if (result.isConfirmed) {
                    this.router.navigate(['/dashboard/home']);
              }
            });
          },
          (err) => {
            this.$swal.errorMessage('Failed to login, try again', this.$imgService.imageError).then
            ((result) => {
              if (result.isConfirmed) {
                  setTimeout(() => {
                    this.router.navigate(['/login']);
                  }, 1000);
              }
            });
          }
        );
        break;
      case 'emailandpassword':
        this.$authService.login(user).then(
          (res) => {
            this.$swal.confirmationAnimated('User successfully logged in', this.$imgService.imageHappy).then
            ((result) => {
              if (result.isConfirmed) {

                this.router.navigate(['/dashboard/home']);
              }
            }).catch
            ((err) => {
              this.$swal.errorMessage('Failed to login, try again', this.$imgService.imageError).then
              ((result) => {
                if (result.isConfirmed) {
                    setTimeout(() => {
                      this.router.navigate(['/login']);
                    }, 1000);
                }
              });
            }
            );
          },
          (err) => {
            this.$swal.errorMessage('Wrong username or password', this.$imgService.imageError).then
              ((result) => {
                if (result.isConfirmed) {
                    setTimeout(() => {
                      this.router.navigate(['/login']);
                    }, 1000);
                }
              });
          }
        );
        break;
      default:
        this.$swal.errorMessage('This login method has not been implemented yet', this.$imgService.imageNotFound).then
        ((result) => {
          if (result.isConfirmed) {
                this.router.navigate(['/login']);
          }
        });
        break;
    }


  }
}
