import { Component, Input } from '@angular/core';
import { LevensteinDistanceService } from '../services/levenstein-distance.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgFor, FormsModule],

  providers: [LevensteinDistanceService],
  selector: 'app-levenstein-distance-viz',
  standalone: true,
  styleUrl: './levenstein-distance-viz.component.scss',
  templateUrl: './levenstein-distance-viz.component.html',
})
export class LevensteinDistanceVizComponent {
  @Input() string1: string = '';
  @Input() string2: string = '';

  private _t: number = 0;
  history: number[][][] = [];

  constructor(private levensteinDistanceService: LevensteinDistanceService) {}

  @Input()
  set t(value: number) {
    if (value >= 0 || value < this.history.length) {
      this._t = value;
    } else {
      throw new Error('t out of scope');
    }
  }

  get t() {
    return this._t;
  }

  reset() {
    this.t = 0;
    this.history = [];
  }

  run() {
    this.reset();

    this.levensteinDistanceService.levenshteinDistance(
      this.string1,
      this.string2
    );
    this.history = this.levensteinDistanceService.matrixHistory;
  }
}
