import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'highlighted'
})
export class HighlightedDirective {
  @Input('highlighted') isHighlighted = false

  @Output() toggleHighlight = new EventEmitter();

  constructor() {
    const hh = 10;
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return 'true'
  }

  @HostListener('mouseover', ['$event'])
  mouseOver(event) {
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave(event) {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
