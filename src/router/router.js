import { createApp } from 'vue';
import './input.css';
import { router, axios, App } from './router'; // Importez le router et axios depuis router.js

import 'flowbite/dist/flowbite.css';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).mount('#app');