import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { maskDigitValidators, neverValidator } from './digit-validator';
import {
  SPECIAL_CHARACTERS,
  TAB,
  overWriteCharAtPosition,
  LEFT_ARROW,
  RIGHT_ARROW,
  BACKSPACE,
  DELETE,
} from './mask.utils';

@Directive({
  selector: '[inputMask]',
})
export class InputMaskDirective implements OnInit {
  @Input('inputMask')
  mask = '';

  input!: HTMLInputElement;
  isFullSelected = false;

  constructor(private el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnInit(): void {
    this.input.value = this.buildPlaceholder();
  }

  buildPlaceholder(): string {
    const chars = this.mask.split('');

    const val = chars.reduce(
      (result, char) =>
        (result += SPECIAL_CHARACTERS.includes(char) ? char : '_'),
      ''
    );

    return val;
  }

  @HostListener('select', ['$event'])
  onSelect($event: UIEvent) {
    this.isFullSelected = this.input.selectionStart == 0 && this.input.selectionEnd === this.input.value.length;
  }


  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode: number) {
    
    if($event.metaKey || $event.ctrlKey) {
      return;
    }
    
    if (keyCode !== TAB) {
      $event.preventDefault();
    }

    const key = String.fromCharCode(keyCode),
      cursorPos = this.input.selectionStart!;


    if(this.isFullSelected) {
      this.input.value = this.buildPlaceholder();
      const firstPlaceholderPos = this.input.value.indexOf('_');
      this.input.setSelectionRange(firstPlaceholderPos, firstPlaceholderPos);
    }
    switch (keyCode) {
      case LEFT_ARROW:
        this.handleLeftArrow(cursorPos);
        return;

      case RIGHT_ARROW:
        this.handleRightArrow(cursorPos);
        return;

      case BACKSPACE: 
        this.handleBackspace(cursorPos);
        return;

      case DELETE:
        this.handleDelete(cursorPos);
        return;
    }

    const maskDigit = this.mask.charAt(cursorPos),
    digitValidator = maskDigitValidators[maskDigit] || neverValidator;
    
    if(digitValidator(key)) {
      overWriteCharAtPosition(this.input, cursorPos, key);
      this.handleRightArrow(cursorPos);
    }
    
  }

  handleDelete(cursorPos: number) {
    overWriteCharAtPosition(this.input, cursorPos, '_');
    this.input.setSelectionRange(cursorPos, cursorPos);  
  }

  handleBackspace(cursorPos: number) {
    const previousPos = this.calculatePrevCursorPos(cursorPos);
    if (previousPos >= 0) {
      overWriteCharAtPosition(this.input, previousPos, '_');
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  calculatePrevCursorPos(cursorPos: number): number {
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);
    for(let i= valueBeforeCursor.length -1; i >= 0; i--) {
      if( !SPECIAL_CHARACTERS.includes(valueBeforeCursor[i] )) {
        return i;
      }
    }
     return valueBeforeCursor.lastIndexOf('_');
  }

  handleRightArrow(cursorPos: number) {
    const valueAfterCursor = this.input.value.slice(cursorPos + 1);
    let nextPos= 0;

    for(let i=0; i< valueAfterCursor.length; i++) {
      if(!(SPECIAL_CHARACTERS.includes(valueAfterCursor[i]))) {
        nextPos= i;
        break;
      }
    }

    if (nextPos >= 0) {
      const newCursorPos = cursorPos + nextPos + 1;
      this.input.setSelectionRange(newCursorPos, newCursorPos);
    }
  }

  handleLeftArrow(cursorPos: number) {
    const previousPos = this.calculatePrevCursorPos(cursorPos);
    
    if (previousPos >= 0) {
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }
}
