import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { SPECIAL_CHARACTERS, TAB, overWriteCharAtPosition } from './mask.utils';

@Directive({
  selector: '[inputMask]'
})
export class InputMaskDirective implements OnInit {

  @Input('inputMask')
  mask= '';

  input!: HTMLInputElement;
  
  constructor( private el: ElementRef) {
    this.input = el.nativeElement;
   }

  ngOnInit(): void {
    this.input.value = this.buildPlaceholder();
  }

  buildPlaceholder(): string {
  
    const chars = this.mask.split('');

    const val = chars.reduce((result, char) => result += SPECIAL_CHARACTERS.includes(char) ? char : '_'
    , '');

    return val;
  }

  
  @HostListener("keydown", ["$event", '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode: number) {
    if(keyCode !== TAB) {
      $event.preventDefault();
    }

    const key = String.fromCharCode(keyCode),
    cursorPos= this.input.selectionStart!;
    
    overWriteCharAtPosition(this.input, cursorPos, key);
  }

}

