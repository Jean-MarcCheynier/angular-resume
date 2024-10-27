import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { InputComponent } from '../input/input.component';
import {
  LevensteinDistanceRatioResult,
  LevensteinDistanceService,
} from 'app/services/levenstein-distance.service';

import { FormsModule } from '@angular/forms';

export interface Suggestion<T> {
  displayValue: string;
  ratio?: number;
  value: T | null;
}

@Component({
  imports: [DropdownComponent, InputComponent, FormsModule],
  selector: 'app-auto-complete',
  standalone: true,
  styleUrl: './auto-complete.component.scss',
  templateUrl: './auto-complete.component.html',
})
export class AutoCompleteComponent<
  T extends Record<P, string>,
  P extends keyof T
> {
  @ViewChild('searchInput') searchInput!: ElementRef;

  @Input() placeholder = 'Placeholder';
  @Input() options: T[] = [];
  @Input() searchProperties: P[] = [];

  @Input() value: T | null = null;
  @Input() renderOption: (value: T) => string = (value) =>
    value[this.searchProperties[0]];

  searchTerm = this.value ? this.value[this.searchProperties[0]] : '';
  isSearching = false;
  showSearches = false;
  suggestions: Suggestion<T>[] = [];

  constructor(private levensteinDistanceService: LevensteinDistanceService) {}

  handleOnChange(term: string) {
    // Adding keyup Event Listerner on input field

    this.isSearching = true;
    if (!term) {
      this.suggestions = [];
      return;
    }

    this.suggestions = this.fromLevensteinDistanceRatioToSuggestions(
      this.levensteinDistanceService.getLevensteinDistanceRatio(
        term,
        this.options,
        this.searchProperties
      )
    );
    if (this.suggestions.length > 0) {
      this.showSearches = true;
    }
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
          ratio: v.ratio,
          value: v.value,
        });
      });
    });
    return res;
  }

  handleOnSelectSuggestion = (suggestion: T | null) => {
    //this.value = suggestion;
    this.searchTerm = this.renderOption(suggestion as T);
    this.showSearches = false;
  };
}
