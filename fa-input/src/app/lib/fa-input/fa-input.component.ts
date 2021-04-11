import { AfterContentInit, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements AfterContentInit {

  @Input()
  icon= '';

  @ContentChild(InputRefDirective)
  input!: InputRefDirective;

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    let cssClass= 'fa';
    if (this.icon) {
      cssClass = (cssClass + this.icon) as string;
    }
    const cssClasses: {[cssClass: string]: boolean} = {
      cssClass: true
    };
    return cssClasses;
  }
  ngAfterContentInit(): void {
    if(!this.input) {
      console.error('No input bootstrapped');
    }
  }


}
