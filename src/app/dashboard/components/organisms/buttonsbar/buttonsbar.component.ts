import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { ImagesService } from 'src/app/services/notifications/images.service';
import { SwalService } from 'src/app/services/notifications/swal.service';
import { buttonInfo } from 'src/app/shared/types/buttonInfo.type';




@Component({
  selector: 'app-buttonsbar',
  templateUrl: './buttonsbar.component.html',
  styleUrls: ['./buttonsbar.component.scss']
})
export class ButtonsbarComponent {

  @Input() listPlacehoder :  buttonInfo[]= [];
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();

  constructor(){}


    click(event: MouseEvent) {
		  this.clickEvent.emit(event);
	  }


}
