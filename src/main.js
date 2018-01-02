// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueForm from 'vue-form';
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import '@/less/main.less';
import App from './App';
import router from './router';
import store from './store';
import mixins from './mixins';

Vue.config.productionTip = false;
Vue.use(VueForm, {
  validators: {
    matches(value, attrValue) {
      if (!attrValue) return true;
      return value === attrValue;
    },
  },
});

Vue.mixin(mixins);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
