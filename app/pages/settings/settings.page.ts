import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true, // Required for standalone components
  imports: [IonicModule, FormsModule], // Import any required modules here
})
export class SettingsPage {
  settings = {
    darkMode: false,
    notifications: true,
  };

  logout() {
    console.log('Logging out...');
    // Clear authentication tokens and redirect to login
  }
}
