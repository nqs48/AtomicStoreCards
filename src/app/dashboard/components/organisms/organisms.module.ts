import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AtomsModule } from '../atoms/atoms.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [NavbarComponent, CardComponent],
  imports: [CommonModule, AtomsModule],
  exports: [NavbarComponent, CardComponent],
})
export class OrganismsModule {}
