import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from 'src/app/auth/interface/card.model';
import { UserModel } from 'src/app/auth/interface/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActionDashboardService } from 'src/app/services/actions/action.dashboard.service';
import { ApiService } from 'src/app/services/api.service';
import { ImagesService } from 'src/app/services/notifications/images.service';
import { SwalService } from 'src/app/services/notifications/swal.service';
import { buttonInfo } from 'src/app/shared/types/buttonInfo.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  imageLogo: string;
  ngClassButton = 'btn';
  ngClassText = 'text-white fs-3';
  textContentButton = 'Home';
  listPlaceholder: buttonInfo[];

  charactersList: CardModel[] | null | undefined;
  currentUser!: UserModel;

  constructor(
    public $api: ApiService,
    public $authService: AuthService,
    public $router: Router,
    public $swal: SwalService,
    public $imgService: ImagesService,
    public $actionRedirect: ActionDashboardService
  ) {
    this.imageLogo = this.$imgService.imageLogo;
    this.listPlaceholder=[
      {class: 'bg-black', placeholder: 'Home', method: ()=>this.$actionRedirect.goToHome()},
      {class: 'bg-danger', placeholder: 'Logout', method: ()=>this.$actionRedirect.logout()},
      {class: 'bg-black', placeholder: 'top up', method: ()=>this.recharge()}
    ];
  }

  ngOnInit(): void {
    this.charactersList= this.$authService.currentUserValue().cards;
    this.$authService.getUserFirestore().subscribe
    ((data) => {
        this.currentUser= data[0];
        this.charactersList= this.currentUser.cards;
    }
    )
  }


  recharge(){
    this.$swal.confirmationRecharge(this.$imgService.imageHappyMoney).then
    ((result) => {
      if (result.isConfirmed) {
        let accumulatedForDay= this.currentUser.cashForDay + parseInt(result.value);
        if(accumulatedForDay > 200){

          this.$swal.errorMessage(`You have exceeded the limit of $ 200 per day \nActually: ${this.currentUser.cashForDay}/200 USD `,this.$imgService.imageError);
          return;
        }
        this.currentUser.cash = this.currentUser.cash + parseInt(result.value);
        this.currentUser.cashForDay = this.currentUser.cashForDay + parseInt(result.value);
        this.$authService.updateUserFirestore(this.currentUser).then
        ((res) => {
          this.$swal.confirmationAnimated(`Successful reload, now you have \n $${this.currentUser.cash} USD`, this.$imgService.imageHappy).then
          ((result) => {
            if (result.isConfirmed) {
                this.$router.navigate(['/dashboard/user']);
            }
          }
          )
        }
        ).catch
        ((err) => {
          this.$swal.errorMessage("Something went wrong!!",this.$imgService.imageError);
        }
        );

      }
    })
  }


}
