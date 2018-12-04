import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: {
    ui: {
      showLoginModal: false,
    },
  },
  actions,
  mutations,
  getters,
};
