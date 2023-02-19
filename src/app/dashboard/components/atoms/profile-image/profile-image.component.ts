import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss'],
})
export class ProfileImageComponent {
  @Input() urlImage: string | null | undefined;
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();

  click(event: MouseEvent) {
		this.clickEvent.emit(event);
	}
}
