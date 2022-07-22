import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PageToggleService} from "../../share/page-toggle.service";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [
    // PageToggleService
  ]
})
export class StopwatchComponent implements OnInit {

  present = 'welcome';
  commandText: any;

  goClock() {
    this.pageToggleService.goPage('/clock');
    // this.router.navigateByUrl('/clock');
  }

  constructor(
    private router: Router,
    public pageToggleService: PageToggleService
  ) {
  }

  startTime($event: any) {
    this.present = $event;
  }

  ngOnInit(): void {
  }
}
