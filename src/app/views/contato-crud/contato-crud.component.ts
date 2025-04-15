import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-crud',
  templateUrl: './contato-crud.component.html',
  styleUrls: ['./contato-crud.component.css']
})
export class ContatoCrudComponent implements OnInit
{
  constructor(private router: Router){}
  ngOnInit(): void {
      
  }
  navigateToContatoCreate(): void
  {
    this.router.navigate(['/contato/create'])
  }
}
