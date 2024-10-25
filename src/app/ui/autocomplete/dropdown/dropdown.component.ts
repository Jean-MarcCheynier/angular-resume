import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { Suggestion } from '../auto-complete/auto-complete.component';

@Component({
  imports: [NgFor, NgIf],
  selector: 'app-dropdown',
  standalone: true,
  styleUrl: './dropdown.component.scss',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent<T extends object> {
  ngOnChanges(): void {
    console.log('dropdown items', this.dropdownItems);
  }
  @Input() dropdownItems: Suggestion<T>[] = [];
  @Input() value: T | null = null;
  @Input() showDropdown = true;
  @Input() renderOption?: (value: T) => string = (value) => value.toString();

  handleOnDropdownItemClick = (item: T | null) => {
    if (item) {
      this.value = item;
      this.showDropdown = true;
    }
  };
}
