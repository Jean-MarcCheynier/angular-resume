import { Component, Input, OnInit } from '@angular/core';
import {
  LevensteinDistanceService,
  MatrixHistory,
} from '../services/levenstein-distance.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  imports: [NgFor, FormsModule, NgIf],

  providers: [LevensteinDistanceService],
  selector: 'app-levenstein-distance-viz',
  standalone: true,
  styleUrl: './levenstein-distance-viz.component.scss',
  templateUrl: './levenstein-distance-viz.component.html',
})
export class LevensteinDistanceVizComponent implements OnInit {
  @Input() string1: string = '';
  @Input() string2: string = '';
  @Input() t: number = 0;

  public thistory: MatrixHistory = [];

  private string1Subject = new Subject<string>();
  private string2Subject = new Subject<string>();
  private subscriptions: Subscription[] = [];

  constructor(private levensteinDistanceService: LevensteinDistanceService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.string1Subject.pipe(debounceTime(300)).subscribe(() => {
        this.run();
      })
    );

    this.subscriptions.push(
      this.string2Subject.pipe(debounceTime(300)).subscribe(() => {
        this.run();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  handleOnString1Change(value: string) {
    this.string1Subject.next(value);
  }

  handleOnString2Change(value: string) {
    this.string2Subject.next(value);
  }

  goToFirstStep() {
    this.t = 0;
  }

  goToLastStep() {
    this.t = this.thistory.length - 1;
  }

  goToNextStep() {
    if (this.t < this.thistory.length - 1) {
      this.t++;
    }
  }

  goToPreviousStep() {
    if (this.t > 0) {
      this.t--;
    }
  }

  reset() {
    this.t = 0;
    this.thistory = [];
  }

  run() {
    this.reset();

    this.levensteinDistanceService.levensteinDistance(
      this.string1,
      this.string2
    );
    const history = this.levensteinDistanceService.matrixHistory;
    this.thistory = history;
    this.goToLastStep();
  }
}
