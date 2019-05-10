import Vue from 'vue';
import Router from 'vue-router';

import GameView from '@/views/gameview.vue';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/game',
      name: 'game-view',
      component: GameView,
      props: true
    }
  ]
})
