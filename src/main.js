import { createApp } from 'vue'
import store from './vuex/store'
import router from './router/router'
import 'material-design-icons-iconfont'

import App from './App.vue'


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')



