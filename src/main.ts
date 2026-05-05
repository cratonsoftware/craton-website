import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, importProvidersFrom, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

registerLocaleData(ptBr);

bootstrapApplication(AppComponent, {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(
			routes,
			withInMemoryScrolling({
				scrollPositionRestoration: 'enabled',
				anchorScrolling: 'enabled',
			}),
		),
		{ provide: LOCALE_ID, useValue: 'pt-BR' },
		{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
		importProvidersFrom(MatIconModule),
		provideEnvironmentNgxMask(),
	],
}).catch((err) => console.error(err));
