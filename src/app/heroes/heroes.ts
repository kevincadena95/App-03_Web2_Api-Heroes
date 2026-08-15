import { Component, inject, signal } from '@angular/core';
import { HeroesService } from '../service/heroes-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {

  private heroesService = inject(HeroesService);
  heroes= signal<any[]>([]);

  ngOnInit() {
    this.heroesService.obtenerHeroes().subscribe(data => {
      console.log(data);
      this.heroes.set(data);
    });
  }

}
