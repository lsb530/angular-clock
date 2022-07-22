import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {StopwatchComponent} from "../section/stopwatch/stopwatch.component";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PageToggleService {

  public routingCount: number = 0;

  constructor(
    private router: Router
  ) { }

  plusCount() {
    this.routingCount++;
  }

  goPage(target: string) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
