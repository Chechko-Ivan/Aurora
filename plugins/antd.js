import Vue from 'vue';
import { Row, Col, Tabs, Drawer, notification } from 'ant-design-vue';

import 'ant-design-vue/es/grid/style/index.css';
import 'ant-design-vue/es/tabs/style/index.css';
import 'ant-design-vue/es/drawer/style/index.css';

Vue.use(Row);
Vue.use(Col);
Vue.use(Tabs);
Vue.use(Drawer);

Vue.prototype.$notification = notification;
