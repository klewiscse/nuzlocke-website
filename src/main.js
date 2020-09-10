import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

/*Firebase*/
const firebaseConfig = {
  apiKey: "AIzaSyAFlHMEIQtousfpGP82-L7iIycuJSqvK08",
  authDomain: "sluglocke.firebaseapp.com",
  databaseURL: "https://sluglocke.firebaseio.com",
  projectId: "sluglocke",
  storageBucket: "sluglocke.appspot.com",
  messagingSenderId: "712465256094",
  appId: "1:712465256094:web:f208691de80539ad64f58f",
  measurementId: "G-5YJZ9MQ5PX"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

/*Vuex state management*/
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userSettings: {},
    isLoggedIn: false
  },
  mutations: {
    set_user_settings(state, settings){
      state.userSettings = settings;
    },
    set_login_status(state, status){
      state.isLoggedIn = status;
    }
  }
});

/*App*/
new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount('#app');