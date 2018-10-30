import Component from '@ember/component';
import Scrollama from 'scrollama';

export default class SlideContainer extends Component {

  slides = [];
  registerMe = this.registerFunc.bind(this);

  didInsertElement() {
    super.didInsertElement(...arguments);

    const scroller = Scrollama();
    this.set('scroller', scroller);

    this.setupScroller();
  }

  setupScroller() {
    const slides = this.get('slides');
    const scroller = this.get('scroller');

    scroller
      .setup({
        step: '.slide',
        progress: true
			})
      .onStepEnter(data => {
        const currentSlide = slides.find(s => s.element === data.element);
        const nextSlide = slides[slides.indexOf(currentSlide) + 1];

        if(currentSlide) {
          currentSlide.setActive();
        }

        if(nextSlide !== undefined){
          nextSlide.prepare();
        }
      })
      .onStepExit(data => {
        const currentSlide = slides.find(s => s.element === data.element);
        if(currentSlide) {
          currentSlide.setInactive();
        }
      })
			.onStepProgress(data => {
        const currentSlide = slides.find(s => s.element === data.element);
        if(currentSlide) {
          currentSlide.progress(data.progress);
        }
      });

		window.addEventListener('resize', scroller.resize());
  }

  registerFunc(slide) {
    this.get('slides').push(slide);
  }
}
