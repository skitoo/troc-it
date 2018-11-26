import { mount, createLocalVue } from '@vue/test-utils';
import NavbarMenu from './NavbarMenu';


describe('components::NavbarMenu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NavbarMenu);
  });

  it('should render NavbarMenu', () => {
    expect(wrapper.classes()).toContain('navbar-menu');

    const end = wrapper.find('div.navbar-end');
    const buttons = end.findAll('a.button');
    expect(buttons.length).toBe(2);
  });
});
