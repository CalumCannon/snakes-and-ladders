import Vue from 'vue';
import Router from 'vue-router';

import GameView from '@/views/gameview.vue';
import WelcomeView from '@/views/welcomeview.vue';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/game',
      name: 'game-view',
      component: GameView,
      props: true
    }
  ]
});
