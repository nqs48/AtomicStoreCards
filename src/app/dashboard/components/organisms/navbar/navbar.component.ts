import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() src_img: string | null | undefined;
  @Input() textContentText: string | null | undefined;
  ngClassButton = 'btn btn-danger';
  ngClassText = 'text-white fs-3';
  textContentButton = 'Logout';
}
