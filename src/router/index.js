import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import store from '@/store';

import MsgComponent from '@/pages/message/msgComponent';
import HomeComponent from '@/pages/home/homeComponent';
import meComponent from '@/pages/me/meComponent';
import topicComponent from '@/pages/topic/topicComponent';
import searchComponent from '@/pages/search/searchComponent';

/*Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}*/

Router.prototype.lazyGo = function (path, fn) {
  fn && fn();
  var _this = this;
  setTimeout(function () {
    _this.push(path);
  }, 200);
};

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
        },
        {
          path: '/search',
          name: 'search',
          component: searchComponent
        }
      ]
    }
  ]
});

/*router.beforeEach((to, from, next) => {
  console.log(to);
  if (!to.name) {
    return;
  }

  next();
});*/

export default router;
