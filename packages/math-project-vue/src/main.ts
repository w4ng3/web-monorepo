import { createApp } from 'vue'
import App from './App.vue'
import i18nPlugin from './plugins/i18n'
import router from './router'
import './style.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(router)
app.use(i18nPlugin)

app.mount('#app')
