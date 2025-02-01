import { animate, AnimationBuilder, style } from '@angular/animations';
import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[wobble]',
  standalone: true
})
export class WobbleDirective {
  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);
  private palyer = this.builder.build(
    [
      style({ transform: 'translateX(0)' }),
      animate('300ms', style({ transform: 'translateX(-5px)' })),
      animate('300ms', style({ transform: 'translateX(5px)' })),
      animate('300ms', style({ transform: 'translateX(-5px)' })),
      animate('300ms', style({ transform: 'translateX(5px)' })),
      animate('300ms', style({ transform: 'translateX(0)' })),
    ]
  )
    .create(this.elementRef.nativeElement);

  private playAnimation() {
    this.palyer.play();
    this.palyer.onDone(() => {
      this.palyer.reset();
      this.palyer.play();
    });
  }

  private stopAnimation() {
    if(this.palyer) {
      this.palyer.pause();
      this.palyer.reset();
    }
  }

  @HostListener('mouseenter') onMauseEnter() {
    this.playAnimation();
  }

  @HostListener('mouseleave') onMauseLeave(){
    this.stopAnimation();
  }
}
