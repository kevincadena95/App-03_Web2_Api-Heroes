import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  private http = inject(HttpClient);
  private apiUrl = 'https://akabab.github.io/superhero-api/api/all.json';

  obtenerHeroes() {
    return this.http.get<any[]>(this.apiUrl);
  }

}
