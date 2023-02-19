import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AtomsModule } from '../atoms/atoms.module';
import { CardComponent } from './card/card.component';
import { ButtonsbarComponent } from './buttonsbar/buttonsbar.component';

@NgModule({
  declarations: [NavbarComponent, CardComponent, ButtonsbarComponent],
  imports: [CommonModule, AtomsModule],
  exports: [NavbarComponent, CardComponent,ButtonsbarComponent],
})
export class OrganismsModule {}
