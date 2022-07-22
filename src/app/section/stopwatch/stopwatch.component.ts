import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PageToggleService} from "../../share/page-toggle.service";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
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
    private pageToggleService: PageToggleService
  ) {
  }

  startTime($event: any) {
    this.present = $event;
  }

  ngOnInit(): void {
  }
}
