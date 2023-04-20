import { createApp } from 'vue'
import {registerMicroApps} from 'qiankun'
import App from './App.vue'
import router from './router'
import store from './store'

registerMicroApps([
  {
    name: 'react app',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/#/react'
  },
  {
    name: 'vue app',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/#/vue2'
  }
])

createApp(App).use(store).use(router).mount('#app1')
