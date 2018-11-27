import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import messages from './locales';

Vue.use(VueI18n);


const i18n = new VueI18n({
  locale: 'fr',
  messages,
});


/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  i18n,
  render: h => h(App),
});
