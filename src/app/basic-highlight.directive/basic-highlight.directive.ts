import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHightLight]'
})

export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef : ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = '#5789D8';
    }
}