import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-driven-forms',
  templateUrl: './data-driven-forms.component.html',
  styleUrls: ['./data-driven-forms.component.css']
})
export class DataDrivenFormsComponent implements OnInit {
  fg: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
     myNm: this.fb.control('', Validators.compose(
       [Validators.required, MyValidators.myVali]
     )),
     pass: this.fb.control('', Validators.required, MyValidators.myAsync),
     mobile: this.fb.control('', Validators.required),
     cnfrmPass: this.fb.control('', Validators.required)
    });
  }

  mySub() {
    console.log(this.fg);

  }

}
export class MyValidators {
  // tslint:disable-next-line:no-unused-expression
  static myVali(control: AbstractControl): ValidationErrors | null {
    if (control.value.charAt(0) === 'a' || control.value.charAt(0) === 'A') {
      return null;
    }
    return{
      isA: true
    };
  }

  static myAsync(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
     return Observable.create(sub => {
       setTimeout(() => {
         if (control.value.charAt(0) === 'a') {
           sub.next(null);
         } else {
          sub.next({
            isA: true
          });
         }
         sub.complete();
       }, 3000);
     });
  }

}
