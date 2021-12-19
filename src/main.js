import { createApp, reactive } from 'vue'

import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const band = reactive({ name: 1 });


// const band = { name: 1 }

// setInterval(() => {
//     band.name++
// }, 2000);

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app')
// createApp(App, { band }).mount('#app');
