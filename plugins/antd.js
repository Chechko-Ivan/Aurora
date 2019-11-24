import Vue from 'vue';
import { Row, Col, Tabs, notification } from 'ant-design-vue';

import 'ant-design-vue/es/grid/style/index.css';
import 'ant-design-vue/es/tabs/style/index.css';

Vue.use(Row);
Vue.use(Col);
Vue.use(Tabs);

Vue.prototype.$notification = notification;
