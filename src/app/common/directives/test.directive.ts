import {Directive, ElementRef, Renderer, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirective {
  renderer: Renderer;
  el: ElementRef;

  @Output() changes = new EventEmitter();


  constructor(el: ElementRef, renderer: Renderer) {
    this.renderer = renderer;
    this.el = el;
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('click', ['$event.target'])
  clicked(target) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'blue');
  }



}
