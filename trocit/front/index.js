import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import Icon from 'vue-awesome/components/Icon';
import App from './App';
import messages from './locales';
import StoreData from './store';
import './fontawesome';

require('./styles/style.scss');

const config = JSON.parse(document.getElementById('config').textContent);

Vue.use(VueI18n);
Vue.use(Vuex);

Vue.component('icon', Icon);


const i18n = new VueI18n({
  locale: config.language,
  fallbackLocale: 'en',
  messages,
});

const store = new Vuex.Store(StoreData);


/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  render: h => h(App),
});
