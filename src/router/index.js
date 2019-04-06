import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import About from '../components/About.vue';

Vue.use(Router);

export const createRouter = () => {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: HelloWorld },
      { path: '/About', component: About } 
    ]
  });
};
