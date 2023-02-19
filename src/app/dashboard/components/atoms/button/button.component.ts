import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() placeholder: string = '';
  @Input() class: string = '';
 	@Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();


  click(event: MouseEvent) {
		this.clickEvent.emit(event);
	}


}
