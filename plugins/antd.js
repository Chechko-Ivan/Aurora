import Vue from 'vue';
import { Row, Col, Tabs, Drawer, Progress, notification } from 'ant-design-vue';

import 'ant-design-vue/es/grid/style/index.css';
import 'ant-design-vue/es/tabs/style/index.css';
import 'ant-design-vue/es/drawer/style/index.css';
import 'ant-design-vue/es/progress/style/index.css';
import 'ant-design-vue/lib/notification/style/index.css';

Vue.use(Row);
Vue.use(Col);
Vue.use(Tabs);
Vue.use(Drawer);
Vue.use(Progress);

Vue.use({
  install(Vue) {
    Vue.prototype.$notification = notification;
  }
});

notification.config({
  top: '15px'
});
