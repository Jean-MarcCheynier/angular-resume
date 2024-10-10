import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevensteinDistanceVizComponent } from './levenstein-distance-viz.component';

describe('LevensteinDistanceVizComponent', () => {
  let component: LevensteinDistanceVizComponent;
  let fixture: ComponentFixture<LevensteinDistanceVizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevensteinDistanceVizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevensteinDistanceVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
