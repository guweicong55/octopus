import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import MsgComponent from '@/pages/message/msgComponent';
import HomeComponent from '@/pages/home/homeComponent';
import meComponent from '@/pages/me/meComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: HomeComponent
        },
        {
          path: '/msg',
          component: MsgComponent
        },
        {
          path: '/me',
          component: meComponent
        }
      ]
    }
  ]
})
