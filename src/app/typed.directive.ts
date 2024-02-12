// typed.directive.ts

import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import Typed from 'typed.js';

@Directive({
  selector: '[appTyped]'
})
export class TypedDirective implements OnChanges {
//   @Input('appTyped') typedStrings: string[] = [];
//   private typedInstance: Typed | null = null;

   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['typedStrings'] && !changes['typedStrings'].firstChange) {
//       this.initializeTyped();
//     }
  }

//   initializeTyped(): void {
//     if (this.typedInstance) {
//       this.typedInstance.destroy();
//     }

//     this.typedInstance = new Typed(this.el.nativeElement, {
//       strings: this.typedStrings,
//       loop: true,
//       typeSpeed: 100,
//       backSpeed: 50,
//       backDelay: 2000
//     });
//   }

//   constructor(private el: ElementRef) {}
 }
