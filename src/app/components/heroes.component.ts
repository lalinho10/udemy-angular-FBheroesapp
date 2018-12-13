import { Component, OnInit } from '@angular/core';

import { Heroe }             from '../interfaces/heroe.interface';

import { HeroeService }      from '../services/heroe.service';

@Component({
	selector: 'app-heroes',
	templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit {
	loading: boolean = true;
	heroes: Heroe[] = [];

	constructor( private heroeService: HeroeService ) {}

	ngOnInit() {
		this.heroeService.consultarHeroes().subscribe( data => {
			this.heroes = data;
			this.loading = false;
		});
	}

	borrarHeroe( idHeroe: string ) {
		this.heroeService.borrarHeroe( idHeroe ).subscribe( data => {
			if( data ) {
				console.error( data );
			} else {
				delete this.heroes[ idHeroe ];
			}
		});
	}
}