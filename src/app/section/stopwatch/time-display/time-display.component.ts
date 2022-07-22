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
    this.timeStop();
    this.timeInterval = setInterval(() => {
      if (this.ms >= 100) {
        this.ms = 0;
        this.sec++;
      }
      if (this.sec >= 60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }, 10);
  }

  timeStop() {
    clearTimeout(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ng on changes');
    // console.log(changes);
    for (let propName in changes) {
      // if (propName === 'inputData') {
      //   switch (changes[propName].currentValue) {
      //     case 'start':
      //       this.timeStart();
      //       break;
      //     case 'stop':
      //       this.timeStop();
      //       break;
      //     case 'reset':
      //       this.timeReset();
      //       break;
      //   }
      // }
    }
  }

  ngOnInit(): void {
    console.log('ng on init');
  }

  ngDoCheck(): void {
    console.log('ng do Check');
  }

  ngAfterContentInit(): void {
    console.log('ng after content init');
  }

  ngAfterContentChecked(): void {
    console.log('ng after content checked');
  }

  ngAfterViewInit(): void {
    console.log('ng after view init');
  }

  ngAfterViewChecked(): void {
    console.log('ng after view checked');
  }

  ngDestroy(): void {
    console.log('ng destroy');
  }
}
