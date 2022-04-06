//import { create } from 'core-js/core/object'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import JwPagination from "jw-vue-pagination";

const app = createApp(App)

app.use(router)
app.mount('#app')
app.component('jw-pagination', JwPagination)
