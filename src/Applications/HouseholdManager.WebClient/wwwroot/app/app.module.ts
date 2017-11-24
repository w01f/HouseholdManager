import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { routing } from './app.routing';

import { BsModalModule } from 'ng2-bs3-modal';

import { allComponents } from "./components/_components-index";
import { allDynamicComponents } from "./components/_dynamic-components-index";
import { allDirectives } from "./helpers/directives/_directives-index";
import { allUIControls } from "./helpers/ui-controls/_ui-controls-index";
import { allServices } from "./services/_services-index";
import { allGuards } from "./helpers/guards/_guards-index";

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		routing,

		BsModalModule
	],
	declarations: [
		allComponents,
		allDirectives,
		allUIControls
	],
	entryComponents: [allDynamicComponents],
	providers: [
		allServices,
		allGuards
	],
	bootstrap: [AppComponent]
})

export class AppModule { }