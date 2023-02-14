import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [HomeComponent, UserComponent],
  imports: [
    AtomsModule,
    CommonModule,
    MoleculesModule,
    OrganismsModule  ],
  exports: []
})
export class PagesModule { }
