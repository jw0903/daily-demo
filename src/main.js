import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import hello from "./components/hello.js";
import cardSlide from "vue-card-slide";
import VueTouch from "vue-touch";
Vue.use(VueTouch, {
  name: "v-touch"
});
Vue.use(cardSlide);
Vue.use(hello);
Vue.config.productionTip = false;

new Vue({
  data: {
    num: 1
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
