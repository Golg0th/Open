import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'; // Importer Axios
import 'flowbite/dist/flowbite.css';

import LandingPage from './components/LandingPage.vue';
import NotFound from './components/NotFound.vue';
import Nancy from './components/NancyPage.vue';
import WhoAreOui from './components/WhoareWe.vue';

const routes = [
    { path: "/", component: LandingPage },
    { path: "/:catchAll(.*)", component: NotFound },
    { path: "/nancy", component: Nancy },
    { path: "/whoareoui", component: WhoAreOui }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'hash'
});

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).mount('#app');
