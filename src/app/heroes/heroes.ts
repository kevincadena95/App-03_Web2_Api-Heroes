import { Component, inject } from '@angular/core';
import { HeroesService } from '../service/heroes-service';

@Component({
  selector: 'app-heroes',
  imports: [],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {

  private heroesService = inject(HeroesService);
  heroes: any[] = [];

  ngOnInit() {
    this.heroesService.obtenerHeroes().subscribe(data => {
      console.log(data);
      this.heroes = data;
    });
  }

}
