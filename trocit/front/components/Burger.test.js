import { mount } from '@vue/test-utils';
import Burger from './Burger';


describe('components::Burger', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Burger);
  });

  it('should render burger', () => {
    expect(wrapper.classes()).toContain('navbar-burger');
    expect(wrapper.classes()).toContain('burger');
    expect(wrapper.findAll('span').length).toBe(3);
  });

  it('should emit "click" event on click', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
