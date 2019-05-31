import { Component } from '@angular/core';
import { KeyListControlDirective } from './key-list-control.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  arrowkeyLocation=0;
  valueSelected:any;
  items=[{key:'test'},{key:'test1'},{key:'test2'}];

}
