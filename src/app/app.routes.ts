import { RouterModule, Routes } from '@angular/router';

import { HeroeComponent }       from './components/heroe.component';
import { HeroesComponent }      from './components/heroes.component';

const APP_ROUTES = [
	{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
	{ path: 'heroe/:id', component: HeroeComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: '**', redirectTo: '/heroes' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );