import Vue from 'vue'
import Router from 'vue-router'
import Knights from '@/components/Knights/index.vue'
import PostKnight from '@/components/post-knight/index.vue'
import UpdateKnight from '@/components/update-knight/index.vue'
import HallOfHeroes from '@/components/hall-of-heroes/index.vue'
import KnightDetail from '@/components/knight-detail/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/knights'     
    },
    {
      path: '/knights',
      name: 'Knights',
      component: Knights
    },
    {
      path: '/post-knight',
      name: 'PostKnight',
      component: PostKnight
    },
    {
      path: '/update-knight',
      name: 'UpdateKnight',
      component: UpdateKnight
    },
    {
      path: '/hall-of-heroes',
      name: 'HallOfHeroes',
      component: HallOfHeroes
    },
    {
      path: '/knight-detail/:id',
      name: 'KnightDetail',
      component: KnightDetail
    }
  ]
})
