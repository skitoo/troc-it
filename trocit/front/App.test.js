import { mount, createLocalVue } from '@vue/test-utils';
import App from './App';
import Navbar from './components/Navbar';

describe('App component', () => {
  it('should contains Navbar component', () => {
    const vue = createLocalVue();
    const wrapper = mount(App, { vue });
    expect(wrapper.contains(Navbar)).toBeTruthy();
  });
});
