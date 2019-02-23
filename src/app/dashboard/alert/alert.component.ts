import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
  <div class="starter-template alert alert-info">
  <h1>Bootstrap starter template</h1>
  <p class="lead">Use this document as a way to quickly start any new project.
  <br> All you get is this text and a mostly barebones HTML document.</p>
</div>
  `,
  styles: []
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
