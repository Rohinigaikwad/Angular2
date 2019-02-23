import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbo',
  template: `
  <div class="starter-template jumbotron">
  <h1>Bootstrap starter template</h1>
  <p class="lead">Use this document as a way to quickly start any new project.
  <br> All you get is this text and a mostly barebones HTML document.</p>
</div>
`,
  styles: []
})
export class JumboComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
