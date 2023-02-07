import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { MoleculesModule } from '../molecules/molecules.module';



@NgModule({
  declarations: [HomeComponent, UserComponent],
  imports: [
    CommonModule,
    MoleculesModule,
    OrganismsModule  ],
  exports: []
})
export class PagesModule { }
