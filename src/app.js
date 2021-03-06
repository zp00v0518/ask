import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import './components/atoms';
import api from './utils/api.js';
Vue.prototype.$api = api;

export function createApp() {
  // Создаём экземпляр маршрутизатора
  const router = createRouter();

  const app = new Vue({
    // внедряем маршрутизатор в корневой экземпляр Vue
    router,
    render: h => h(App)
  });
  // возвращаем и приложение и маршрутизатор
  return { app, router };
}
