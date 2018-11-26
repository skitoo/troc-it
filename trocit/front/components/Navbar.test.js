import { mount, createLocalVue } from '@vue/test-utils';
import Navbar from './Navbar';
import Burger from './Burger';
import NavbarMenu from './NavbarMenu';


describe('components::Navbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Navbar);
  });

  it('should render Navbar', () => {
    expect(wrapper.classes()).toContain('navbar');
    expect(wrapper.contains(Burger)).toBeTruthy();
    expect(wrapper.contains(NavbarMenu)).toBeTruthy();
  });

  it('should be active menu', () => {
    expect(wrapper.vm.isActive).toBeFalsy();

    const menu = wrapper.find(NavbarMenu);
    const burger = wrapper.find(Burger);
    expect(menu.classes()).not.toContain('is-active');
    expect(burger.classes()).not.toContain('is-active');
    wrapper.vm.isActive = true;
    expect(menu.classes()).toContain('is-active');
    expect(burger.classes()).toContain('is-active');
  });

  it('should toggle isActive when user click on Burger button', () => {
    const burger = wrapper.find(Burger);
    burger.trigger('click');
    expect(wrapper.vm.isActive).toBeTruthy();
    burger.trigger('click');
    expect(wrapper.vm.isActive).toBeFalsy();
  });
});
