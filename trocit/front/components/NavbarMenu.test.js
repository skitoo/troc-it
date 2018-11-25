import { mount, createLocalVue } from '@vue/test-utils';
import NavbarMenu from './NavbarMenu';


describe('components::NavbarMenu', () => {
  it('should render NavbarMenu', () => {
    const vue = createLocalVue();
    const wrapper = mount(NavbarMenu, { vue });

    expect(wrapper.classes()).toContain('navbar-menu');

    const end = wrapper.find('div.navbar-end');
    const buttons = end.findAll('a.button');
    expect(buttons.length).toBe(2);
  });
});
