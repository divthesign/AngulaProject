import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  saludo: string;
  color: string;

  constructor() { }

  ngOnInit() {
    this.saludo = 'Hola'
    this.color = '#F20E50'
  }

}
