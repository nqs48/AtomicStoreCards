import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/auth/interface/user.model';
import { CardModel } from 'src/app/auth/interface/card.model';
import { SwalService } from '../../../../services/notifications/swal.service';
import { ImagesService } from 'src/app/services/notifications/images.service';
import { buttonInfo } from 'src/app/shared/types/buttonInfo.type';
import { ActionDashboardService } from '../../../../services/actions/action.dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageLogo!: string;
  listPlaceholder: buttonInfo[];
  logout!:any;

  charactersList!: CardModel[];
  currentUser!: UserModel;
  ngClassLabel!: string;

  constructor(
    public $api: ApiService,
    public $authService: AuthService,
    public $router: Router,
    public $swal: SwalService,
    public $imgService: ImagesService,
    public $actionRedirect: ActionDashboardService
  ) {
    this.imageLogo = this.$imgService.imageLogo;
    this.logout= ()=>this.$actionRedirect.goToUser();
    this.listPlaceholder=[
      {class: 'bg-black', placeholder: 'User', method: ()=>this.$actionRedirect.goToUser()},
      {class: 'bg-danger', placeholder: 'Logout', method: ()=>this.$actionRedirect.logout()},
      {class: 'bg-black', placeholder: 'Data',method: ()=>this.$actionRedirect.goToinfo()},
    ];



  }
  ngOnInit(): void {
    this.$api.getCardsFirebase().subscribe
   ((data: CardModel[]) => {
     this.charactersList = data;
    })


    this.$authService.getUserFirestore().subscribe
    ((data) => {
      if(data.length == 0 ){
        const user= this.$authService.currentUserValue();
        this.$authService.addNewUserToFirestore(user)
      }else{
        this.currentUser= data[0];
      }
    }
    )

  }

  //Buy card
  buyCard(id:any){
      const cardBuyed: CardModel= this.charactersList.filter((card: CardModel) => card.uid === id)[0];
      if(this.currentUser.cash < cardBuyed.price){
        this.$swal.confirmationAnimated("You have no money \n ...top up now !", this.$imgService.imageCrying).then
        ((result) => {
          if (result.isConfirmed) {
              this.$router.navigate(['/dashboard/home']);
          }
        }
        )
      }else if(cardBuyed.cantity < 1 ){
        this.$swal.confirmationAnimated("This Card is not avalaible",this.$imgService.imageNotAvailable).then
      }else{
        this.currentUser.cash = this.currentUser.cash - cardBuyed.price;
        this.currentUser.cards.push(cardBuyed);
        this.$authService.updateUserFirestore(this.currentUser).then
        ((res) => {
          this.$swal.confirmationAnimated(`Successfully purchased card now \n you have ${this.currentUser.cash} USD`, this.$imgService.imageHappy).then
          ((result) => {
            if (result.isConfirmed) {
              cardBuyed.cantity= cardBuyed.cantity - 1;
              this.$api.updateCardFirestore(cardBuyed);
              this.$router.navigate(['/dashboard/home']);
            }
          }
          )
        },
        (err) => {
          this.$swal.errorMessage("Something went wrong!!", this.$imgService.imageError)
        }
        );

      }


  }
}
