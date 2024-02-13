import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() hightlightColor: string = 'blue';

 // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
 @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private rendered: Renderer2) {}

  ngOnInit(){
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event ){
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event ){
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
