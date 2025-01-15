import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule],
})
export class HeaderComponent {
  constructor(private menuCtrl: MenuController) {}

  // Adjust menu width dynamically
  setMenuWidth(width: string): void {
    document.querySelector('ion-menu')?.style.setProperty('--width', width);
  }

  // Programmatically toggle the menu
  toggleMenu(): void {
    this.menuCtrl.toggle();
  }

  logout() {
    console.log('Logout clicked');
  }

}
