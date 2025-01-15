import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibraryMenuService {
  getMenuItems() {
    return [
      { title: 'Home', url: '/home', icon: 'home' },
      { title: 'Profile', url: '/profile', icon: 'person' },
      { title: 'Settings', url: '/settings', icon: 'settings' },
    ];
  }
}
