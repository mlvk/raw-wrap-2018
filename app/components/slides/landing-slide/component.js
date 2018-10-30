import GenericSlide from '../../generic-slide/component';
import { TweenMax } from "gsap/TweenMax";
import { action } from '@ember-decorators/object';

export default class SlidesLandingSlideComponent extends GenericSlide {
  animate() {
    TweenMax.to(this.buildSelector('.fade-in'), 1, {opacity:1});
  }

  isReady() {
    return this.get('productImageReady') && this.get('logoReady');
  }

  @action
  productImageReady() {
    this.set('productImageReady', true);
    this.notifyReadyChanged();
  }

  @action
  logoReady() {
    this.set('logoReady', true);
    this.notifyReadyChanged();
  }
}
