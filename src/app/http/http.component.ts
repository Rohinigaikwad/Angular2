import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { WebService } from './web.service';
import { WebDomain, User } from './web-domain';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit , OnDestroy {
  cnt = 0;
  private subs: Array<Subscription> = [];
  webDomain: WebDomain;

  constructor(
    private webService: WebService
  ) { }

   ngOnInit() {
   this.subs.push(
     this.myObs().subscribe(
      nxt => console.log(nxt),
      err => console.log(err),
      () => console.log(`Completed`)
    )
 ) ;


   this.subs.push(
     interval(2000).subscribe(
     int => this.cnt++
   )
  );
}

   ngOnDestroy() {
    this.subs.array.forEach (
     sub => sub.unsubscribe()
     );
    }

  // tslint:disable-next-line:no-unused-expression
  myObs(): Observable <object> {
    return Observable.create (
      sub => {
        for (let i = 0; i < 100; i++) {
          sub.next(`${i}`);
          if (i === 100) {
          sub.error(`Hi this is error`);
          }
        }
        sub.complete();
      }
    );
  }

 OnClk() {
  this.webService.listUsers(2).subscribe(
    resObj => this.webDomain = resObj as WebDomain
  );

   let  usr = {} as User;
   usr.name = 'android';
   usr.job = 'java';
  this.webService.saveUser(usr).subscribe(
    res => console.log(res)
  );
 }

}
