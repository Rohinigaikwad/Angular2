import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  amt: number = 3;
  date = new Date();
  os = 'android';
  mb = '';
  tb = '';
  mobiles = [
    'android',
    'apple',
    'java',
    'bb',
    'htc',
    'vivo',
    'motorola',
    'oppo',
    'windows',
    'zenfone'
  ];

  constructor() { }

  ngOnInit() {
  }

  onOk() {
    this.mobiles.push(this.tb);
  }
}
