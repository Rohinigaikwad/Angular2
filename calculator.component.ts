import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

result: string;
clearTotal: boolean;

constructor() {
  this.result = '';
  this.clearTotal = false;
}
key(value: string) {
  if (this.clearTotal === true) {
    this.result = '';
    this.result += value;
    this.clearTotal = false;
  } else {
    this.result += value;
    this.clearTotal = false;
  }
  }
  clear() {
    this.result = '';
  }
  evaluate() {
    this.clearTotal = true;
    // tslint:disable-next-line:no-eval
    this.result = eval(this.result);
  }

}

/*addition() {
  this.result = this.num1 + this.num2;
}

subtract() {
  this.result = this.num1 - this.num2;
}
multi() {
  this.result = this.num1 * this.num2;
}
divide() {
  this.result = (this.num1) / (this.num2);
}*/


