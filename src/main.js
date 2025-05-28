import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBnsQcM0DladVfKhMb3Mu_uROpJp68tgas',
      authDomain: 'adds-project-2a7c9.firebaseapp.com',
      projectId: 'adds-project-2a7c9',
      storageBucket: 'adds-project-2a7c9.firebasestorage.app',
      messagingSenderId: '942128027123',
      appId: '1:942128027123:web:0d5fb9b87e4e924b1b6e86'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')

  }
})
