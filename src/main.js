import { createApp, reactive } from "vue";
import App from "./App.vue";

import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// import "./utils/promise";
// import "./utils/aop";
import "./utils/review";
// const band = reactive({ name: 1 });

// const band = { name: 1 }

// setInterval(() => {
//     band.name++
// }, 2000);

const app = createApp(App);
app.use(ElementPlus);
app.use(router);

app.mount("#app");
// createApp(App, { band }).mount('#app');
