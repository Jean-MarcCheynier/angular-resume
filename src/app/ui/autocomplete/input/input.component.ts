import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  @Input()
  onChange?: (value: string) => void;

  handleInputChange(newValue: string) {
    this.value = newValue;
    console.log('Input value changed:', newValue);
    this.onChange?.(newValue);
  }
  onEnter = () => {};

  onArrowDown = () => {};
  onArrowUp = () => {};
}
