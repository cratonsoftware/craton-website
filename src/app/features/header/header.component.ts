import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	imports: [MatIconModule],
})
export class HeaderComponent {
	isMenuOpen = signal<boolean>(false);

	toggleMenu = () => this.isMenuOpen.update((value) => !value);
}
