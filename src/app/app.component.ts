import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { inject as injectAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { ContatoComponent } from './features/contato/contato.component';
import { FooterComponent } from './features/footer/footer.component';
import { HeaderComponent } from './features/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { RoadmapComponent } from './features/roadmap/roadmap.component';
import { ServicosComponent } from './features/servicos/servicos.component';
import { SobreComponent } from './features/sobre/sobre.component';
import { SolucoesComponent } from './features/solucoes/solucoes.component';
import { ICON_NAMES } from './generated/icon-list';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	imports: [HeaderComponent, HeroComponent, ServicosComponent, SolucoesComponent, RoadmapComponent, SobreComponent, ContatoComponent, FooterComponent],
})
export class AppComponent {
	private iconRegistry = inject(MatIconRegistry);
	private sanitizer = inject(DomSanitizer);

	constructor() {
		this.registrarIcones();
	}

	ngOnInit(): void {
		injectAnalytics();
		injectSpeedInsights();
	}

	registrarIcones() {
		for (const name of ICON_NAMES) {
			const url = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${name}.svg`);
			this.iconRegistry.addSvgIcon(name, url);
		}
	}
}
