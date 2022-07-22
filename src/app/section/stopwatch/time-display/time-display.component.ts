import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {PageToggleService} from "../../../share/page-toggle.service";

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  // providers: [
  //   PageToggleService
  // ]
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: string = '';

  min: number = 0
  sec: number = 0
  ms: number = 0
  timeInterval: any;

  constructor(
    public pageToggleService: PageToggleService
  ) {
    console.log(this.inputData);
  }

  timeStart() {
    this.pageToggleService.plusCount();
    this.timeStop();
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10);
  }

  timeStop() {
    clearTimeout(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for (let propName in changes) {
      if(propName === 'inputData') {
        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }
    }
  }

  ngOnInit(): void {
  }

}
