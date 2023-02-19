import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardModel } from 'src/app/auth/interface/card.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from '../api.service';
import { ImagesService } from '../notifications/images.service';
import { SwalService } from '../notifications/swal.service';

@Injectable({
  providedIn: 'root'
})
export class ActionDashboardService  implements OnInit, OnDestroy{

  dataList!:any;
  suscriptionApi!: Subscription;

  constructor(public $api: ApiService,
    public $authService: AuthService,
    public $router: Router,
    public $swal: SwalService,
    public $imgService: ImagesService) { }


  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.suscriptionApi.unsubscribe();
  }

    logout() {
    this.$authService
      .logout()
      .then(() => {
        this.$swal.confirmationAnimated('The session was successfully closed',this.$imgService.imageLogout).then
        ((result) => {
          if (result.isConfirmed) {
              this.$router.navigate(['/login']);
          }
        })
      })
      .catch((error) => {
        this.$swal.errorMessage("Something went wrong!!",this.$imgService.imageError);
      });
    }

    goToUser(){
      this.$swal.confirmationAnimated('You are already in the user section',this.$imgService.imageToUser).then
      ((result) => {
        if (result.isConfirmed) {
        this.$router.navigate(['/dashboard/user']);
        }
      }).catch
      ((error) => {
        this.$swal.errorMessage("Something went wrong!!",this.$imgService.imageError);
      }
      );
    }

    goToHome() {
      this.$swal.confirmationAnimated("Lets go to buy ", this.$imgService.imageHappy).then
      (() => {
            this.$router.navigate(['/dashboard/home']);
      });
    }

    goToinfo(){
      this.$api.getCardsFirebase().subscribe
        ((data: CardModel[]) => {
          if (data.length < 1) {
            this.$swal.mappingData('Mapping data from API',this.$imgService.imageGetting).then
              (() => {
                this.$api.mapData();
                return;
              });
              console.log("La data no estaba cargada");
          }
          // else{
          //   console.log("La data ya estaba cargada");
          //   this.$swal.confirmationAnimated('Data already downloaded',this.$imgService.imageHappy).then
          //   ((result) => {
          //     if (result.isConfirmed) {
          //     console.log("La data ya estaba cargada");
          //     }
          //   }
          //   );
          //   return
          // }
          }).unsubscribe;


    }


}
