import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import Note from '@/components/Note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'News',
      component: News
    }, {
      path: '/news',
      name: 'News',
      component: News
    }, {
      path: '/note',
      name: 'Note',
      component: Note
    }
  ]
})
