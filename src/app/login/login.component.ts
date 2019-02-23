import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  onLogin (eml: string, pass: string) {
    // this.router.navigate(['dash', eml);   // 1st-Route path,Route Variable-same in rm
     this.router.navigate(['dash', eml], {   // 2nd -is javascript object and to that object queryParams is the key
       queryParams: {
         ttl: 100,
         tenant: 'codekul'
       }
    });
  }

}
