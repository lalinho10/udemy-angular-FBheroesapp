import { Component, OnInit }      from '@angular/core';
import { NgForm }                 from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Heroe }                  from '../interfaces/heroe.interface';

import { HeroeService }           from '../services/heroe.service';

@Component({
	selector: 'app-heroe',
	templateUrl: 'heroe.component.html'
})

export class HeroeComponent implements OnInit {
	idHeroe: string = '';

	esNuevo: boolean = false;

	heroe: Heroe = {
		nombre: '',
		casa: 'Marvel',
		bio: ''
	}

	ngOnInit() {
		if( !this.esNuevo ) {
			this.heroeService.consultarHeroe( this.idHeroe ).subscribe( heroe => {
				this.heroe = heroe;
			});
		}
	}

	constructor(
		private activatedRoute: ActivatedRoute,
		private heroeService: HeroeService,
		private router: Router
	) {
		this.activatedRoute.params.subscribe( params => {
			this.idHeroe = params.id;
			this.esNuevo = ( this.idHeroe == 'nuevo' );
		});
	}

	guardar(): void {

		if( this.esNuevo ) {
			this.heroeService.agregarHeroe( this.heroe ).subscribe( data => {
				this.router.navigate( [ '/heroe', data.name ] );
			},
			error => {
				console.error( error );
			});
		} else {
			this.heroeService.modificarHeroe( this.heroe, this.idHeroe ).subscribe( data => {
				console.log( data );
			},
			error => {
				console.error( error );
			});
		}
		
	}

	guardarNuevo( myForm: NgForm ) {
		this.router.navigate( [ '/heroe', 'nuevo' ] );
		myForm.reset( { casa: 'Marvel' } );
	}
}