import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  menuAberto: boolean = true;

  // Detecta movimento do mouse
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Se o mouse estiver muito próximo da borda esquerda, abre o menu
    if (event.clientX < 20) {
      this.menuAberto = true;
    }

    // Se o mouse estiver longe do menu, fecha
    if (event.clientX > 250 && this.menuAberto) {
      this.menuAberto = false;
    }
  }
}
