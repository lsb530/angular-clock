import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from "./section.component";
import {StopwatchModule} from "./stopwatch/stopwatch.module";
import {RouterModule, Routes} from "@angular/router";
import {StopwatchComponent} from "./stopwatch/stopwatch.component";
import {ClockComponent} from './clock/clock.component';
import {PageToggleService} from "../share/page-toggle.service";

const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }
]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
  ],
  exports: [
    SectionComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PageToggleService
  ]
})
export class SectionModule { }
