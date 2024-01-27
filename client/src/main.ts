import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

const vuetify = createVuetify()

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(store)

app.mount('#app')
