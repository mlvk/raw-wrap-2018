import Component from '@ember/component';
import { className } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { guidFor } from '@ember/object/internals';

export default class GenericSlideComponent extends Component{
  @className slide = 'slide';

  @className
  @computed
  get animationId() {
    return guidFor(this);
  }

  static positionalParams = ['registerFunc'];

  setup(){
    // Override
  }

  teardown() {
    // Override
  }

  addListeners() {
    // Override
  }

  removeListeners() {
    // Override
  }

  isReady() {
    // Override with custom readiness logic
    return true;
  }

  notifyReadyChanged() {
    this._processReadinessChanged();
  }

  animate() {
    //Override
  }

  pause() {
    //Override
  }

  buildSelector(partial) {
    return `.${this.get('animationId')} ${partial}`;
  }

  setActive() {
    this.set('shouldPrepare', true);
    this.set('active', true);

    this._processReadinessChanged();
  }

  _processReadinessChanged() {
    if(this.isReady() && this.get('active')) {
      this.animate();
    }
  }

  setInactive() {
    this.set('active', false);
    this.pause();
  }

  prepare() {
    this.set('shouldPrepare', true);
  }

  progress(percentage) {
    this.set('percentage', percentage);
  }

  didInsertElement() {
    super.didInsertElement(...arguments);

    if (this.get('registerFunc') === undefined) {
      throw new Error('I need a register function');
    }

    this.get('registerFunc')(this);

    this.setup();
    this.addListeners();
  }

  willDestroyElement() {
    this._super(...arguments);

    this.teardown();
    this.removeListeners();
  }
}
