import Vue from 'vue';

import VueYandexMetrika from 'vue-yandex-metrika';
import VueGtag from 'vue-gtag';

Vue.use(VueYandexMetrika, {
  id: 57617677,
  env: process.env.NODE_ENV,
  options: {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  }
});

Vue.use(VueGtag, {
  config: { id: 'UA-158767565-1' }
});
