import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Suggestion } from '../auto-complete/auto-complete.component';

@Component({
  imports: [NgFor, NgIf],
  selector: 'app-dropdown',
  standalone: true,
  styleUrl: './dropdown.component.scss',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent<T extends object> {
  ngOnChanges(): void {}
  @Input() dropdownItems: Suggestion<T>[] = [];
  @Input() value: T | null = null;
  @Input() showDropdown = true;
  @Input() renderOption?: (value: T) => string = (value) => value.toString();

  @Output() selectSuggestionEvent = new EventEmitter<T>();

  handleOnDropdownItemClick = (item: T) => {
    this.value = item;
    this.showDropdown = false;
    this.selectSuggestionEvent.emit(this.value);
  };
}
