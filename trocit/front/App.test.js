import { mount, createLocalVue } from '@vue/test-utils';
import App from './App';

describe('App component', () => {
  it('should have .red class', () => {
    const vue = createLocalVue();
    const app = mount(App, { vue });
    expect(app.classes()).toContain('red');
  });
});
