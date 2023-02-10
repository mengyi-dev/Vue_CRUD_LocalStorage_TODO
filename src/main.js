import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import dayjs from 'dayjs';
import _ from 'lodash';

const app = createApp(App)
app.config.globalProperties.$dayjs = dayjs
app.provide("dayJS", dayjs)
app.provide("$_", _)
app.use(store)
app.use(router)
app.mount('#app')
