import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }              from 'rxjs';

import { Heroe }                   from '../interfaces/heroe.interface';

@Injectable()
export class HeroeService {
	apiHeroes: string = 'https://heroapp-1112c.firebaseio.com/heroes';

	constructor( private http: HttpClient ) {}

	consultarHeroes(): Observable<any> {
		let url = `${ this.apiHeroes }.json`;

		return this.http.get( url );
	}

	consultarHeroe( idHeroe: string ): Observable<any> {
		let url = `${ this.apiHeroes }/${ idHeroe }.json`

		return this.http.get( url );
	}

	agregarHeroe( heroe: Heroe ): Observable<any> {
		let url = `${ this.apiHeroes }.json`;

		let body = JSON.stringify( heroe );

		let httpHeaders = { headers: new HttpHeaders().set( 'Content-Type', 'application/json' ) }

		return this.http.post( url, body, httpHeaders );
	}

	modificarHeroe( heroe: Heroe, idHeroe: string ): Observable<any> {
		let url = `${ this.apiHeroes }/${ idHeroe }.json`;

		let body = JSON.stringify( heroe );

		let httpHeaders = { headers: new HttpHeaders().set( 'Content-Type', 'application/json' ) }		

		return this.http.put( url, body, httpHeaders );
	}

	borrarHeroe( idHeroe: string ): Observable<any>  {
		let url = `${ this.apiHeroes }/${ idHeroe }.json`;

		let httpHeaders = { headers: new HttpHeaders().set( 'Content-Type', 'application/json' ) }

		return this.http.delete( url, httpHeaders );
	}
}