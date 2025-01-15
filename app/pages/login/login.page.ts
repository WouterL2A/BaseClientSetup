import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true, // Required for standalone components
  imports: [IonicModule], // Import any required modules here
})
export class LoginPage {
  email = '';
  password = '';

  login() {
    if (this.email && this.password) {
      console.log('Logging in:', this.email);
      // Call the authentication service to validate user credentials
    } else {
      console.error('Please fill in both fields.');
    }
  }
}
