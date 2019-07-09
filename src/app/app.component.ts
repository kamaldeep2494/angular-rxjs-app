import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'angular-rxjs-app';
 isRoot: Observable<boolean>;
 constructor(private router: Router) {}

  ngOnInit() {
    this.isRoot = this.router.events.pipe(
      filter(x => x instanceof NavigationEnd),
      map((x: RouterEvent) => x.url != '/')
    );
  }
}
