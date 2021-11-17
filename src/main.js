import { createApp, reactive } from 'vue'
import App from './App.vue'

const band = reactive({ name: 1 })

setInterval(() => {
    band.name++
}, 2000);

createApp(App, { band }).mount('#app');
