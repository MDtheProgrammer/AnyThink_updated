import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') onmouseover(eventData: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'border-radius',
      '0.5rem'
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'yellow'
    );
    this.renderer.setStyle(this.element.nativeElement, 'transition', '1s');
  }
  @HostListener('mouseleave') onmouseout(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', 'none');
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'none'
    );
    this.renderer.setStyle(this.element.nativeElement, 'transition', '1s');
  }
}
