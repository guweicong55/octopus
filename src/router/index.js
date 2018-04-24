import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import store from '@/store';

import MsgComponent from '@/pages/message/msgComponent';
import HomeComponent from '@/pages/home/homeComponent';
import meComponent from '@/pages/me/meComponent';
import topicComponent from '@/pages/topic/topicComponent';

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router);

var router = new Router({
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
          name: 'home',
          component: HomeComponent
        },
        {
          path: '/msg',
          name: 'msg',
          component: MsgComponent
        },
        {
          path: '/me',
          name: 'me',
          component: meComponent
        },
        {
          path: '/topic/:id',
          name: 'topic',
          component: topicComponent
        }
      ]
    }
  ]
});

/*router.beforeEach((to, from, next) => {
  //需要隐藏的页面-对应router的name
  var pagesName = ['topic'];

  var flag = pagesName.indexOf(to.name) !== -1 ? false: true;
  store.commit('footBarShow', flag);

  next();
});*/

export default router;
