import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';

@Directive({
  selector: '[onlyLetters]'
})
export class MyDirectiveDirective implements OnInit {
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    fromEvent(this.element.nativeElement, 'keydown').subscribe((event: KeyboardEvent) => {
      if (event.code.includes('Digit')) {
        event.preventDefault(); // Event Propagation: Browser should stop processing this event
      }
    });
  }
}
