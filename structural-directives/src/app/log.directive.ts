import { Directive } from '@angular/core';

@Directive({
  selector: 'input[appLog]',
  host: {
    '(input)':'onInput($event)'
  }
})
export class LogDirective {

  constructor() {  }

  onInput(event){
    console.log(event)
    console.log(event.target.value)
  }
}
