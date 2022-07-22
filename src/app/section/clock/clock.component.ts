import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
import {interval, map, subscribeOn} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  timeString: string = '';

  constructor(private router: Router) {
    // setInterval(() => {
    //
    // }, 1000);
    interval(1000)
      .pipe(map(() => {
        return moment().format('YYYY-MM-DD HH:mm:ss')
      }))
      .subscribe(data => {
        this.timeString = data;
    })
  }

  goStopwatch() {
    this.router.navigateByUrl('/stopwatch');
  }

  ngOnInit(): void {
  }

  getCurrentTime() {
    // console.log('1111');
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
