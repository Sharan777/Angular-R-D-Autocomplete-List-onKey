import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appKeyListControl]'
})
export class KeyListControlDirective {
@Output() arrowDown:EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef) { }
  arrowkeyLocation = 0;
  @HostListener('keydown',['$event']) onkeydown(event: KeyboardEvent) {    
     switch (event.keyCode) {      
        case 38: // this is the ascii of arrow up
                 this.arrowkeyLocation--;
                 this.arrowDown.emit(this.arrowkeyLocation)
                 break;
        case 40: // this is the ascii of arrow down
                 this.arrowkeyLocation++;
                 this.arrowDown.emit(this.arrowkeyLocation)
                 break;
    }
  }

}