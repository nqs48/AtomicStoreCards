import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SwalService } from 'src/app/services/notifications/swal.service';
import { ImagesService } from '../../../../services/notifications/images.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() src_img: string | null | undefined;
  @Input() textContentText: string | null | undefined;
  @Input() textContentTextBalance: string | null | undefined;
  ngClassButton = 'btn btn-danger';
  ngClassText = 'text-white fs-3';
  textContentButton = 'Logout';
  imageLogo= 'https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-PNG-HD-Quality.png'

  constructor(public $authService: AuthService,
    public $router: Router,
    public $swal: SwalService,
    public $imgService: ImagesService) {}



  goToUser(){
    this.$swal.confirmationAnimated("Lets go to buy ",this.$imgService.imageToUser).then
    (() => {
          this.$router.navigate(['/dashboard/user']);
    }
    )
  }

}
