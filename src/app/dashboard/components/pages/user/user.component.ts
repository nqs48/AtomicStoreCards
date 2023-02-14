import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from 'src/app/auth/interface/card.model';
import { UserModel } from 'src/app/auth/interface/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { ImagesService } from 'src/app/services/notifications/images.service';
import { SwalService } from 'src/app/services/notifications/swal.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  ngClassButton = 'btn';
  ngClassText = 'text-white fs-3';
  textContentButton = 'Home';

  charactersList: CardModel[] | null | undefined;
  currentUser!: UserModel;

  constructor(
    public $api: ApiService,
    public $authService: AuthService,
    public $router: Router,
    public $swal: SwalService,
    public $imgService: ImagesService
  ) {

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

  logout() {
      this.$authService
        .logout()
        .then(() => {
          this.$swal.confirmationAnimated("The session was successfully closed", this.$imgService.imageHappy).then
          ((result) => {
            if (result.isConfirmed) {
                this.$router.navigate(['/login']);
            }
          })
        })
        .catch((error) => {
          console.log(error);
        });
  }

  goHome() {
    this.$swal.confirmationAnimated("Lets go to buy ", this.$imgService.imageHappy).then
    (() => {
          this.$router.navigate(['/dashboard/home']);
    });
  }

  recharge(){

    this.$swal.confirmationRecharge(this.$imgService.imageHappyMoney).then
    ((result) => {
      if (result.isConfirmed) {
        let accumulatedForDay= this.currentUser.cashForDay + parseInt(result.value);
        if(accumulatedForDay > 200){

          this.$swal.errorMessage('You have exceeded the limit of $ 200 per day',this.$imgService.imageError);
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
