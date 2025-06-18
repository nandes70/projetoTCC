import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  expandido = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Expande ao aproximar da borda esquerda
    if (event.clientX < 20) {
      this.expandido = true;
    } else if (event.clientX > 250) {
      this.expandido = false;
    }
  }
}