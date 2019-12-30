import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
 //import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './scss/main.scss';
import "normalize.css";
Vue.config.productionTip = false;
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueFormGenerator)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
