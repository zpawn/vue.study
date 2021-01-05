import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from './filters/date.filter';
import currencyFilter from './filters/currency.filter';
import messagePlugin from './utils/message.plugin';
import constPlugin from './utils/const.plugin';
import Loader from './components/app/Loader.vue';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.use(constPlugin);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: 'AIzaSyACruKId9nAbgFuXQA9hOKGCTWw3lviqEc',
  authDomain: 'vue-study-adb4a.firebaseapp.com',
  projectId: 'vue-study-adb4a',
  storageBucket: 'vue-study-adb4a.appspot.com',
  messagingSenderId: '754822022250',
  appId: '1:754822022250:web:7cd11608e7b9c5f55ef613',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
