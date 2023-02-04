import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpService$: HttpClient) {}

  getApi() {
    return this.httpService$.get(
      'https://rickandmortyapi.com/api/character?page=2'
    );
  }
}
