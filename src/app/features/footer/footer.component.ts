import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	imports: [MatIconModule],
})
export class FooterComponent {
	anoAtual = new Date().getFullYear();
}
