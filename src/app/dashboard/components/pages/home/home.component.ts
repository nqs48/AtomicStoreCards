import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/auth/interface/user.model';
import { CardModel } from 'src/app/auth/interface/card.model';
import { SwalService } from '../../../../services/notifications/swal.service';
import { ImagesService } from 'src/app/services/notifications/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngClassButton = 'btn btn-danger';
  textContentButton = 'Logout';

  charactersList!: CardModel[];
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


  logout() {
    this.$authService
      .logout()
      .then(() => {
        this.$swal.confirmationAnimated('The session was successfully closed',this.$imgService.imageHappy).then
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
