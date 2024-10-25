import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { InputComponent } from '../input/input.component';
import {
  LevensteinDistanceRatioResult,
  LevensteinDistanceService,
} from 'app/services/levenstein-distance.service';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';

export interface Suggestion<T> {
  displayValue: string;
  value: T | null;
}

@Component({
  imports: [DropdownComponent, InputComponent],
  selector: 'app-auto-complete',
  standalone: true,
  styleUrl: './auto-complete.component.scss',
  templateUrl: './auto-complete.component.html',
})
export class AutoCompleteComponent<
  T extends Record<P, string>,
  P extends keyof T
> implements AfterViewInit
{
  @ViewChild('searchInput') searchInput!: ElementRef;

  @Input() placeholder = 'Placeholder';
  @Input() options: T[] = [];
  @Input() searchProperties: P[] = [];

  @Input() value: T | null = null;
  @Input() renderOption?: (value: T) => string = (value) =>
    value[this.searchProperties[0]];

  isSearching = false;
  showSearches = false;
  suggestions: Suggestion<T>[] = [];

  constructor(private levensteinDistanceService: LevensteinDistanceService) {}

  ngAfterViewInit() {
    this.search();
  }

  search() {
    // Adding keyup Event Listerner on input field
    const search$ = fromEvent<KeyboardEvent>(
      this.searchInput.nativeElement,
      'keyup'
    ).pipe(
      map((event) => (event.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => (this.isSearching = true)),
      switchMap((term) =>
        term
          ? of(
              this.fromLevensteinDistanceRatioToSuggestions(
                this.levensteinDistanceService.getLevensteinDistanceRatio(
                  term,
                  this.options,
                  this.searchProperties
                )
              )
            )
          : of<Suggestion<T>[]>([])
      ),
      tap(() => {
        this.isSearching = false;
        this.showSearches = true;
      })
    );

    search$.subscribe((data) => {
      this.isSearching = false;
      this.suggestions = data;
    });
  }

  fromLevensteinDistanceRatioToSuggestions<T extends Record<P, string>>(
    value: LevensteinDistanceRatioResult<T>
  ): Suggestion<T>[] {
    const res: Suggestion<T>[] = [];
    Object.entries(value).forEach(([key, value]) => {
      res.push({ displayValue: key, value: null });
      value.forEach((v) => {
        res.push({
          displayValue: v.value[this.searchProperties[0]],
          value: v.value,
        });
      });
    });
    return res;
  }
}