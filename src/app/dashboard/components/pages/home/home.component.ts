import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngClassButton = 'btn btn-danger';
  textContentButton = 'Logout';

  title = 'atomic-game';
  charactersList: any;
  currentUser = this.$authService.currentUserValue();

  constructor(
    public $api: ApiService,
    public $authService: AuthService,
    public $router: Router
  ) {}

  ngOnInit() {
    this.$api.getApi().subscribe((data: any) => {
      this.charactersList = data.results;
      console.log(this.charactersList);
    });

    console.log(
      'Este es el usuario actual: ',
      this.$authService.currentUserValue()
    );
  }

  logout() {
    this.$authService
      .logout()
      .then(() => {
        console.log('Saliendo...');
        alert('Saliendo...');
        this.$router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
