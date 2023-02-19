import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() imageLogo: string | null | undefined;
  @Input() ngClassBalance: any;
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {}

    click(event: MouseEvent) {
		  this.clickEvent.emit(event);
	  }


}
