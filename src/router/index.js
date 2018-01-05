import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/main/Main';
import Landing from '@/views/landing/Landing';
import Documentation from '@/views/documentation/Documentation';
import Wrapper from '@/views/authentication/wrapper/Wrapper';
import Login from '@/views/authentication/login/Login';
import ForgotPassword from '@/views/authentication/forgot-password/ForgotPassword';
import Register from '@/views/authentication/register/Register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'Landing',
          component: Landing,
        },
        {
          path: 'documentation',
          name: 'Documentation',
          component: Documentation,
        },
        {
          path: 'auth',
          name: 'Authentication',
          component: Wrapper,
          redirect: 'auth/login',
          children: [
            {
              path: 'login',
              name: 'Login',
              component: Login,
            },
            {
              path: 'forgot-password',
              name: 'ForgotPassword',
              component: ForgotPassword,
            },
            {
              path: 'register',
              name: 'Register',
              component: Register,
            },
          ],
        },
      ],
    },
  ],
});
