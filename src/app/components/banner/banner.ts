import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  isVisible = true;

  constructor() {
    if (sessionStorage.getItem('banner-dismissed') === 'true') {
      this.isVisible = false;
    }
  }

  dismiss() {
    this.isVisible = false;
    sessionStorage.setItem('banner-dismissed', 'true');
  }
}
