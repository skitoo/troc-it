import { mount } from '@vue/test-utils';
import Modal from './Modal';

describe('components::Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Modal, {
      propsData: {
        title: 'A super title',
        submitButtonText: 'My button',
      },
      slots: {
        default: '<div>Content</div>',
      },
    });
  });

  it('should render Modal', () => {
    expect(wrapper.classes()).toContain('modal');
    expect(wrapper.contains('header.modal-card-head')).toBeTruthy();
    expect(wrapper.contains('section.modal-card-body')).toBeTruthy();
    expect(wrapper.contains('footer.modal-card-foot')).toBeTruthy();

    const body = wrapper.find('section.modal-card-body');
    expect(body.contains('div')).toBeTruthy();

    const title = wrapper.find('.modal-card-title');
    expect(title.text()).toEqual('A super title');
    const button = wrapper.find('button.is-primary');
    expect(button.text()).toEqual('My button');
  });

  it('should be emit "close" event on cancel button click', () => {
    const button = wrapper.findAll('button').at(2);
    button.trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('should be emit "close" event on close button click', () => {
    const button = wrapper.findAll('button').at(0);
    button.trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('should be emit "submit" event on submit button click', () => {
    const button = wrapper.findAll('button').at(1);
    button.trigger('click');
    expect(wrapper.emitted('submit')).toBeTruthy();
  });
});
