import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING }      from './app.routes';

import { AppComponent }     from './app.component';
import { HeroeComponent }   from './components/heroe.component';
import { HeroesComponent }  from './components/heroes.component';

import { KeysPipe }         from './pipes/keys.pipe';

import { HeroeService }     from './services/heroe.service';

@NgModule({
	declarations: [
		AppComponent,
		HeroeComponent,
		HeroesComponent,
		KeysPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		APP_ROUTING
	],
	providers: [
		HeroeService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}
