import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appKeyListControl]'
})
export class KeyListControlDirective {
@Output() arrowDown:EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef) { }
  arrowkeyLocation = 0;
  @HostListener('keydown',['$event']) onkeydown(event: KeyboardEvent) { 
    let maxLength = event.target.dataset.arraymaxlength;
    maxLength = maxLength-1;
     switch (event.keyCode) {      
        case 38: // this is the ascii of arrow up
                if(this.arrowkeyLocation > 0){
                  this.arrowkeyLocation--;
                        this.arrowDown.emit(this.arrowkeyLocation)
                        break;
                }else {
                  this.arrowkeyLocation = 0;
                  break;
                }
                 
        case 40: // this is the ascii of arrow down 
                if(this.arrowkeyLocation < maxLength){
                  this.arrowkeyLocation++;
                 this.arrowDown.emit(this.arrowkeyLocation)
                 break;
                }else{
                  this.arrowkeyLocation = maxLength;
                  break;
                }
        case 13:
              this.arrowkeyLocation=0;
              this.arrowDown.emit(this.arrowkeyLocation);
                break
                 
    }
  }

}