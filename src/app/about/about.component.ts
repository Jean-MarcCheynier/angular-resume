import { Component } from '@angular/core';
import { LevensteinDistanceVizComponent } from 'app/levenstein-distance-viz/levenstein-distance-viz.component';

@Component({
  imports: [LevensteinDistanceVizComponent],
  selector: 'app-about',
  standalone: true,
  styleUrl: './about.component.scss',
  templateUrl: './about.component.html',
})
export class AboutComponent {}
