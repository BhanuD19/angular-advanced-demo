import { AfterContentInit, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements AfterContentInit {

  @Input()
  icon: String;

  @ContentChild(InputRefDirective, {static: true})
  input: InputRefDirective;

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses= {};
    if (this.icon) {
      cssClasses['fa-'+this.icon ] = true;
    }
    return cssClasses;
  }
  
  ngAfterContentInit(): void {
    if(!this.input) {
      console.error('No input bootstrapped');
    }
  }


}
