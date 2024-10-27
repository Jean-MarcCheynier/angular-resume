import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  imports: [FormsModule],
  selector: 'app-input',
  standalone: true,
  styleUrl: './input.component.scss',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input()
  value: string = '';
  @Input()
  placeholder = '';
  @Output()
  onValueChange = new EventEmitter<string>();

  searchNotifier$ = new Subject<string>();
  subscription?: Subscription;

  ngOnInit() {
    this.subscription = this.searchNotifier$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((data) => this.onValueChange.emit(data));
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  getValue(event: Event): string {
    event.preventDefault();
    return (event.target as HTMLInputElement).value;
  }

  handleValueChange(newValue: string) {
    this.searchNotifier$.next(newValue);
  }
}
