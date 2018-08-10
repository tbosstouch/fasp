// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import { store } from './components/store/store'
import alertComponent from '@/components/layout/alert'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import './stylus/main.styl'

Vue.use(Vuetify)
Vue.component('app-alert', alertComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCsOqC9TGILAUOXexD852Dg1jpnKI6DqR4",
      authDomain: "fasp-fp.firebaseapp.com",
      databaseURL: "https://fasp-fp.firebaseio.com",
      projectId: "fasp-fp",
      storageBucket: "fasp-fp.appspot.com",
    })
  }
})
