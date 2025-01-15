import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common'; // Import NgFor

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  imports: [IonicModule, RouterModule, NgFor], // Include NgFor here
})
export class MenuComponent {
  menuItems = [
    { title: 'Home', url: '/home' },
    { title: 'Profile', url: '/profile' },
    { title: 'Settings', url: '/settings' },
  ];
}
