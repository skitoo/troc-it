import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Icon from 'vue-awesome/components/Icon';
import App from './App';
import messages from './locales';
import './fontawesome';

require('./styles/style.scss');

Vue.use(VueI18n);
Vue.component('icon', Icon);

const config = JSON.parse(document.getElementById('config').textContent);


const i18n = new VueI18n({
  locale: config.language,
  fallbackLocale: 'en',
  messages,
});


/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  i18n,
  render: h => h(App),
});
