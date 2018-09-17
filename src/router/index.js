import Vue from 'vue';
import Router from 'vue-router';
//相当于把admin.vue缓存到了Admin 里面 var a = res.data;
import Admin from '../admin';
import Index from '../views/index/index';

import One from '../views/nest/one';
import Two from '../views/nest/two';
import Three from '../views/nest/three';

import Arr1 from '../views/child/arr1';
import Second from '../views/index/second';

Vue.use(Router)

const router =  new Router({
  mode:'history',
  routes: [
    {
      path: '',
      name: 'admin',
      component: Admin,
      children:[
      	{
      	  path: '/one',
	        name: 'one',
          alias:'第一页',
	        component: One
	  	  },
      	{
      	  path: '/two',
          name: 'two',
          alias:'第二页',
          component: Two
      	},
      	{
      	  path: '/three',
          name: 'three',
          alias:'第三页啊啊',
          component: Three
      	}
      ]
    },
    {
      path: '/index/index',
      name: 'index',
      alias:'index页',
      component: Index
    },
    {
      path: '/child/arr1',
      name: 'arr1',
      alias:'index页',
      component: Arr1
    },
    {
      path: '/index/second',
      name: 'second',
      alias:'index页',
      component: Second
    }
  ]
})

// router.replace('/index/index')
//暴露接口
export default router;
