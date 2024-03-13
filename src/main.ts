// @ts-ignore
import { createApp } from 'vue'
import './assets/styles.scss'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from './presets/lara'
import router from './router'

const app = createApp(App);

app.use(router)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});

app.mount('#app')

// createApp(App).mount('#app')
