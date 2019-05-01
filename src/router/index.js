import Vue from 'vue';
import Router from 'vue-router';
import { Home, Support, Ask} from '../components/pages';

Vue.use(Router);

export const createRouter = () => {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/support', component: Support },
      { path: '/questions/ask', component: Ask },
    ]
  });
};
