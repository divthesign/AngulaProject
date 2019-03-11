import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  inputText: String = ''
  centrado: String;
  constructor() { }

  ngOnInit() {
    this.centrado = 'center'
  }

}
