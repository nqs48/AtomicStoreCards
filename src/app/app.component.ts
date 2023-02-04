import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'atomic-game';
  charactersList: any;

  constructor(public $api : ApiService) {
  }

  ngOnInit() {

    this.$api.getApi().subscribe((data: any) => {
      this.charactersList=data.results;
      console.log(this.charactersList);
    }
    );
  }



}
