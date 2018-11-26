import { mount, createLocalVue } from '@vue/test-utils';
import App from './App';
import Navbar from './components/Navbar';

describe('App component', () => {
  const vue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App, { vue });
  });

  it('should contains Navbar component', () => {
    expect(wrapper.contains(Navbar)).toBeTruthy();
  });
});
