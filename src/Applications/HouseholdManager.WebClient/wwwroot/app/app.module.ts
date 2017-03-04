import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { routing } from './app.routing';

import { allComponents } from "./components/_components-index";
import { allDirectives } from "./helpers/directives/_directives-index";
import { allServices } from "./services/_services-index";
import { allGuards } from "./helpers/guards/_guards-index";

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		routing
	],
	declarations: [
		allComponents,
		allDirectives
	],
	providers: [
		allServices,
		allGuards
	],
	bootstrap: [AppComponent]
})

export class AppModule { }