import mutations from './mutations';

describe('mutations', () => {
  describe('toggleLoginModal', () => {
    it('should toggle the state of login modal', () => {
      const state = { ui: { showLoginModal: false } };
      mutations.toggleLoginModal(state);
      expect(state).toEqual({ ui: { showLoginModal: true } });
    });
  });
});
