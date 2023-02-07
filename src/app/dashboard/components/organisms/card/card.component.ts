import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() textContentTitle: string = '';
  @Input() textContentSubtitle: string = '';
  @Input() ngClassButton: string = '';
  @Input() textContentButton: string = '';
}
