import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

export function main(appSettings: any) {
	platformBrowserDynamic([{ provide: 'AppSettings', useValue: appSettings }]).bootstrapModule(AppModule);
}