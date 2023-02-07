import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  remainingTime: number;
  @Input()
  seconds = 11;
  private intervalId = 0;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.clearTimer();
      }
    }, 1000);
  }
}
