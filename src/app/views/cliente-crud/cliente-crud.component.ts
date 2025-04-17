import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  navigateToClineteCreate(): void {
    this.router.navigate(['/cliente/create'])
  }
}
