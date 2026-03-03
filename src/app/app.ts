import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
        { threshold: 0.08 }
      );
      document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    }, 0);
  }
}
