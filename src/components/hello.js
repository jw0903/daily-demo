import HelloWorld from "./HelloWorld.vue";

const Hello = {
  install: function(Vue) {
    Vue.component("HmButton", HelloWorld);
  }
};
export default Hello;
