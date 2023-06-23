import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

(async function setupApp() {
    const app = createApp(App)
    app.use(router)
    app.use(store)
    app.mount('#app')
})()