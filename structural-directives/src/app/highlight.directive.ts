import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(renderer: Renderer, el: ElementRef) { 
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'grey')
  }

}
