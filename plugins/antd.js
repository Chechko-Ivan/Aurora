import Vue from 'vue'

import { Row, Col, notification } from 'ant-design-vue'
import 'ant-design-vue/lib/layout/style/index.css'

Vue.use(Row)
Vue.use(Col)

Vue.prototype.$notification = notification
