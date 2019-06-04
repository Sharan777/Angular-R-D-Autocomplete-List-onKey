import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  arrowkeyLocation=0;
  items=[{key:'test'},{key:'test1'},{key:'test2'}];
  views=[{new:'new'},{new:'new2'},{new:'new3'}];

  autocompleteSearch(event){
   console.log(event.target.value);

 }

}
