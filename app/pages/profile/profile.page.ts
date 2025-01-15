import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true, // Required for standalone components
  imports: [IonicModule, FormsModule], // Import any required modules here
})
export class ProfilePage {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  updateProfile() {
    console.log('Profile updated:', this.user);
    // Call a service to update the user's profile in the backend
  }
}
