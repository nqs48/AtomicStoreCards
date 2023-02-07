import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { IconComponent } from './icon/icon.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TextComponent,
    IconComponent,
    IconButtonComponent,
    ProfileImageComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    ButtonComponent,
    TextComponent,
    IconComponent,
    IconButtonComponent,
    ProfileImageComponent
  ]
})
export class AtomsModule { }
